import React from "react";
import './notification-view.css';
import NotificationItem from "../notification-item";

const NotificationView = () => {
    return (
        <ul className="show-notification notification-view dropdown-menu"
            data-dropdown-in="fadeIn"
            data-dropdown-out="fadeOut">
            <li>
                <h6>Notifications</h6>
                <label className="label label-danger">New</label>
            </li>
            <li>
                <NotificationItem/>
            </li>
            <li>
                <NotificationItem/>
            </li>
            <li>
                <NotificationItem/>
            </li>

        </ul>
    )
};

export default NotificationView;