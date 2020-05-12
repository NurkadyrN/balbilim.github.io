import React from "react";
import './navbar-logo.css';

const NavbarLogo = () => {
    return (
        <div className="navbar-logo">
            <a className="mobile-menu" id="mobile-collapse">
                <i className="feather icon-menu"></i>
            </a>
            <a href="index.html">
                <img className="img-fluid" src="/assets/images/logo.png" alt="Theme-Logo"/>
            </a>
            <a className="mobile-options">
                <i className="feather icon-more-horizontal"></i>
            </a>
        </div>
    )
};
export default NavbarLogo;



