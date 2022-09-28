import * as React from "react";
import classes from "./Auth.module.scss";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const enum ActiveFormState {
  Login = "Login",
  Signup = "Signup",
}

const Auth = () => {
  const [activeTab, setActiveTab] = React.useState(ActiveFormState.Login);
  return (
    <div className={classes.container}>
      <div className={classes.container__tabs}>
        <button
          className={
            activeTab === ActiveFormState.Login
              ? [classes.btnTab, classes["btnTab--active"]].join(" ")
              : classes.btnTab
          }
          onClick={() => setActiveTab(ActiveFormState.Login)}
        >
          Login
        </button>
        <button
          className={
            activeTab === ActiveFormState.Signup
              ? [classes.btnTab, classes["btnTab--active"]].join(" ")
              : classes.btnTab
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
