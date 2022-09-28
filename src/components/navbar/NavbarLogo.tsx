import * as React from 'react';
import classes from "./Navbar.module.scss";
import { Link } from 'react-router-dom';


const NavbarLogo = () => {
    return (
      <>
        <Link className={classes.container__link} to={"/"}>
          <div className={classes.mainLogo}>
            <img className={classes.mainLogo__img} src={require("../../img/icons/logo.png")} alt="logo img"></img>
            <h1 className={classes.mainLogo__title} >COOKBOOK</h1>
          </div>
        </Link>
      </>
    );
};

export default NavbarLogo;