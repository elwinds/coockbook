import * as React from 'react';
import Auth from './Auth';
import classes from "./Navbar.module.css";
import NavbarLogo from './NavbarLogo';
import Search from './Search';


const Navbar = () => {
    return (
        <div className={classes.navbarContainer}>
            <NavbarLogo/>
            <Search/>
            <Auth/>
        </div>
    )
};

export default Navbar;