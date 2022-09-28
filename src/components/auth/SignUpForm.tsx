import * as React from "react";
import classes from "./Auth.module.scss";
import { AuthApi } from "../../API/AuthAPI";
import { regExpEmail } from "./regExpEmail";
import { PropsAuth } from "../../API/AuthAPI";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserActionTypes } from "../../store/reducers/userReducer/userTypes";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setIsAuth } = React.useContext(AppContext);

  const [emailValue, setEmailValue] = React.useState<string>("");
  const isEmailValid = regExpEmail.test(emailValue);

  const [passwordValue, setPasswordValue] = React.useState<string>("");
  const isPasswordValid = passwordValue.length >= 8;

  const [repeatPasswordValue, setRepeatPasswordValue] =
    React.useState<string>("");
  const isPasswordMatch = passwordValue === repeatPasswordValue;

  const isButtonDisabled =
    !isEmailValid || !isPasswordValid || !isPasswordMatch;

  const signUpData: PropsAuth = {
    email: emailValue,
    password: passwordValue,
    returnSecureToken: true,
  };

  const buttonClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await AuthApi.signUp(signUpData);
    setEmailValue("");
    setPasswordValue("");
    setRepeatPasswordValue("");

    if (response) {
      localStorage.setItem("idToken", response.data.idToken);
      localStorage.setItem("userEmail", response.data.email);

      dispatch({
        type: UserActionTypes.SET_USER_EMAIL,
        payload: response.data.email,
      });

      if (setIsAuth) {
        setIsAuth(true);
      }
    }

    navigate("../profile", { replace: true });
  };

  return (
    <form className={classes.form}>
      <div className={classes.form__container}>
        <label className={classes.form__label} htmlFor="email">
          E-mail
        </label>
        <input
          className={classes.form__input}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          id="email"
          placeholder="Enter your email"
        ></input>
        {!isEmailValid && (
          <p className={classes.form__invalidMessage}>
            Please enter correct email
          </p>
        )}
        <label className={classes.form__label} htmlFor="password">
          Create password
        </label>
        <input
          className={classes.form__input}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          id="password"
          placeholder="Enter password"
        ></input>
        {!isPasswordValid && (
          <p className={classes.form__invalidMessage}>Minimum 8 symbols</p>
        )}
        <label className={classes.form__label} htmlFor="repeatPassword">
          Repeat password
        </label>
        <input
          className={classes.form__input}
          value={repeatPasswordValue}
          onChange={(e) => setRepeatPasswordValue(e.target.value)}
          type="password"
          id="repeatPassword"
          placeholder="Repeat password"
        ></input>
        {!isPasswordMatch && (
          <p className={classes.form__invalidMessage}>Passwords don't match</p>
        )}
        <button
          className={classes.btnForm}
          disabled={isButtonDisabled}
          onClick={(e) => buttonClickHandler(e)}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
