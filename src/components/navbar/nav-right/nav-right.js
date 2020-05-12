import React from "react";
import './nav-right.css'
import Notifications from "../notifications";
import UserHeaderDropdown from "./user-header-dropdown";


const NavRight = () => {
    return (
        <ul className="nav-right">
            <li className="header-notification">
                <Notifications/>
            </li>
            <li className="header-notification">
                <div className="dropdown-primary dropdown">
                    <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                        <i className="feather icon-message-square"></i>
                        <span className="badge bg-c-green">3</span>
                    </div>
                </div>
            </li>
            <li className="user-profile header-notification">
                <UserHeaderDropdown/>
            </li>
        </ul>
    )
};

export default NavRight;