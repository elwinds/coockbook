import * as React from 'react';
import AuthLogo from './AuthLogo';
import classes from "./Navbar.module.css";
import NavbarLogo from './NavbarLogo';
import Search from './Search';


const Navbar = () => {
    return (
        <div className={classes.navbarContainer}>
            <NavbarLogo/>
            <Search/>
            <AuthLogo/>
        </div>
    )
};

export default Navbar;