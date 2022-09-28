import * as React from 'react';
import AuthLogo from './AuthLogo';
import classes from "./Navbar.module.scss";
import NavbarLogo from './NavbarLogo';
import Search from './Search';


const Navbar = () => {
    return (
        <div className={classes.container}>
            <NavbarLogo/>
            <Search/>
            <AuthLogo/>
        </div>
    )
};

export default Navbar;