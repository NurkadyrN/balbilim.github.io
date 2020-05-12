import React from "react";
import './navbar.css';
import NavbarLogo from "./nav-left/navbar-logo";
import NavLeft from "./nav-left";
import NavRight from "./nav-right";

const Navbar = () => {
    return (
        <nav className="navbar header-navbar pcoded-header">
            <div className="navbar-wrapper">
                <NavbarLogo/>
                <div className="navbar-container container-fluid">
                    <NavLeft/>
                    <NavRight/>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;