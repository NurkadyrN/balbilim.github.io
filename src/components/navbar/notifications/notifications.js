import React from "react";
import './notifications.css';
import NotificationView from "./notification-view";

const Notifications = () => {
    return (
        <div className="dropdown-primary dropdown">
            <div className="dropdown-toggle" data-toggle="dropdown">
                <i className="feather icon-bell"></i>
                <span className="badge bg-c-pink">5</span>
            </div>
            <NotificationView/>
        </div>

    )
};
export default Notifications;