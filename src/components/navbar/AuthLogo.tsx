import * as React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const AuthLogo = () => {
  const { isAuth } = React.useContext(AppContext);
  const authPath = isAuth ? "/profile" : "/auth";

  return (
    <div className={classes.authLogo}>
      <Link to={authPath}>
        <img src={require("../../img/icons/user.png")} alt="user img"></img>
      </Link>
    </div>
  );
};

export default AuthLogo;
