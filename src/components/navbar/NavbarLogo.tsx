import * as React from 'react';
import classes from "./Navbar.module.css";
import { Link } from 'react-router-dom';


const NavbarLogo = () => {
    return (
      <>
        <Link to={"/"}>
          <div className={classes.navbarLogo}>
            <img src={require("../../img/icons/logo.png")} alt="logo img"></img>
            <h1>COOKBOOK</h1>
          </div>
        </Link>
      </>
    );
};

export default NavbarLogo;