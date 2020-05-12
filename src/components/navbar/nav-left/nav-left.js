import React from "react";
import './nav-left.css'
import NavSearch from "./nav-search";


const NavLeft = () => {
    return (
        <ul className="nav-left">
            <li className="header-search">
               <NavSearch/>
            </li>
            <li>
                <a href="#!" className="nav-full-screen"
                   data-cf-modified-97f0cae13537daa86168836e-="">
                    <i className="feather icon-maximize full-screen"></i>
                </a>
            </li>
        </ul>
    )
};

export default NavLeft;