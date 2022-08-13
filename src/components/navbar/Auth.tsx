import * as React from 'react';
import classes from "./Navbar.module.css";


const Auth = () => {
    return (
      <div className={classes.authLogo}>
        <img src={require("../../img/icons/user.png")} alt="user img"></img>
      </div>
    );
}

export default Auth;