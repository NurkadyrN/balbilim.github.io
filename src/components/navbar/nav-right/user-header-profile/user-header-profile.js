import React from "react";
import './user-header-profile.css';
import LiLink from "../li-link";

const UserHeaderProfile = () => {
    return (
        <ul className="show-notification profile-notification dropdown-menu"
            data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <LiLink value="Settings" icon="icon-settings" to="#!"/>
            <LiLink value="Profile" icon="icon-user" to="user-profile.html"/>
            <LiLink value="My Messages" icon="icon-mail" to="email-inbox.html"/>
            <LiLink value="Lock Screen" icon="icon-lock" to="auth-lock-screen.html"/>
            <LiLink value="Logout" icon="icon-log-out" to="/logout"/>
        </ul>
    )
};

export default UserHeaderProfile;