import * as React from "react";
import { AuthApi } from "../../API/AuthAPI";
import classes from "./Auth.module.scss";
import { regExpEmail } from "./regExpEmail";
import { PropsAuth } from "../../API/AuthAPI";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { useDispatch } from "react-redux";
import { UserActionTypes } from "../../store/reducers/userReducer/userTypes";

const LoginForm = () => {
  const { setIsAuth } = React.useContext(AppContext);
  const [emailValue, setEmailValue] = React.useState<string>("");
  const isEmailValid = regExpEmail.test(emailValue);

  const [passwordValue, setPasswordValue] = React.useState<string>("");
  const isPasswordValid = passwordValue.length >= 8;

  const isButtonDisabled = !isEmailValid || !isPasswordValid;

  const loginData: PropsAuth = {
    email: emailValue,
    password: passwordValue,
    returnSecureToken: true,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await AuthApi.login(loginData);
    setEmailValue("");
    setPasswordValue("");

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

    navigate("/profile", { replace: true });
  };

  return (
    <form className={classes.form}>
      <div className={classes.form__container}>
        <label className={classes.form__label} htmlFor="login">
          Login
        </label>
        <input
          className={classes.form__input}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="login"
          id="login"
          placeholder="Enter your email"
        ></input>
        {!isEmailValid && (
          <p className={classes.form__invalidMessage}>
            Please enter correct email
          </p>
        )}
        <label className={classes.form__label} htmlFor="password">
          Password
        </label>
        <input
          className={classes.form__input}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          id="password"
          placeholder="Enter your password"
        ></input>
        <button
          className={classes.btnForm}
          disabled={isButtonDisabled}
          onClick={(e) => buttonClickHandler(e)}
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
