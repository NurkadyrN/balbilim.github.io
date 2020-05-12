import React from "react";
import './message-menu-send.css';

const MessageMenuSend = () => {
    return (
        <div className="chat-reply-box p-b-20">
            <div className="right-icon-control">
                <input type="text" className="form-control search-text"
                       placeholder="Share Your Thoughts"/>
                <div className="form-icon">
                    <i className="feather icon-navigation"></i>
                </div>
            </div>
        </div>
    )
};

export default MessageMenuSend;