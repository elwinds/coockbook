import * as React from "react";
import classes from "./Auth.module.css";
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

  const {setIsAuth} = React.useContext(AppContext);

  const [emailValue, setEmailValue] = React.useState<string>("");
  const isEmailValid = regExpEmail.test(emailValue);

  const [passwordValue, setPasswordValue] = React.useState<string>("");
  const isPasswordValid = passwordValue.length >= 8;

  const [repeatPasswordValue, setRepeatPasswordValue] =
     React.useState<string>("");
  const isPasswordMatch = passwordValue === repeatPasswordValue;

  const isButtonDisabled = !isEmailValid || !isPasswordValid || !isPasswordMatch;


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

    if(response){
    localStorage.setItem("idToken", response.data.idToken);
      dispatch({
        type: UserActionTypes.SET_USER_EMAIL,
        payload: response.data.email,
      });

      if(setIsAuth){
        setIsAuth(true);
      }
    }

    navigate('../profile', { replace: true });
  };

  return (
      <form className={classes.form}>
        <div className={classes.form_inputs}>
          <label htmlFor="email">E-mail</label>
          <input
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            type="email"
            id="email"
            placeholder="Enter your email"
          ></input>
          {!isEmailValid && (
            <p className={classes.invalidInput}>Please enter correct email</p>
          )}
          <label htmlFor="password">Create password</label>
          <input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
            id="password"
            placeholder="Enter password"
          ></input>
          {!isPasswordValid && (
            <p className={classes.invalidInput}>Minimum 8 symbols</p>
          )}
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            value={repeatPasswordValue}
            onChange={(e) => setRepeatPasswordValue(e.target.value)}
            type="password"
            id="repeatPassword"
            placeholder="Repeat password"
          ></input>
          {!isPasswordMatch && (
            <p className={classes.invalidInput}>Passwords don't match</p>
          )}
          <button
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
