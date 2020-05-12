import React from "react";
import './notification-item.css';

const NotificationItem = () => {
    return (
        <div className="media">
            <img className="d-flex align-self-center img-radius"
                 src="/assets/images/avatar-4.jpg"
                 alt="Generic placeholder image"/>
            <div className="media-body">
                <h5 className="notification-user">John Doe</h5>
                <p className="notification-msg">Lorem ipsum dolor sit amet,
                    consectetuer
                    elit.</p>
                <span className="notification-time">30 minutes ago</span>
            </div>
        </div>
    )
};

export default NotificationItem;