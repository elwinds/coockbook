import * as React from "react";
import classes from "./Auth.module.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const enum ActiveFormState {
  Login = "Login",
  Signup = "Signup",
}

const Auth = () => {
  const [activeTab, setActiveTab] = React.useState(ActiveFormState.Login);
  return (
    <div className={classes.form_container}>
      <div className={classes.tabs}>
        <button
          className={
            activeTab === ActiveFormState.Login ? classes.btnActive : ""
          }
          onClick={() => setActiveTab(ActiveFormState.Login)}
        >
          Login
        </button>
        <button
          className={
            activeTab === ActiveFormState.Signup ? classes.btnActive : ""
          }
          onClick={() => setActiveTab(ActiveFormState.Signup)}
        >
          Sign Up
        </button>
      </div>
      {activeTab === ActiveFormState.Login && <LoginForm />}
      {activeTab === ActiveFormState.Signup && <SignUpForm />}
    </div>
  );
};

export default Auth;
