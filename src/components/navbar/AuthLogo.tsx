import * as React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const AuthLogo = () => {
  const { isAuth } = React.useContext(AppContext);
  const authPath = isAuth ? "/profile" : "/auth";

  return (
    <div>
      <Link to={authPath}>
        <img
          className={classes.authLogo}
          src={require("../../img/icons/user.png")}
          alt="user img"
        ></img>
      </Link>
    </div>
  );
};

export default AuthLogo;
