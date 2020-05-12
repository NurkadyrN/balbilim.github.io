import React from "react";
import './chat-menu-content.css'

const ChatMenuContent = () => {
    return (
        <div className="media chat-messages">
            <a className="media-left photo-table" href="#!">
                <img className="media-object img-radius img-radius m-t-5"
                     src="/assets/images/avatar-3.jpg"
                     alt="Generic placeholder image"/>
            </a>
            <div className="media-body chat-menu-content">
                <div className="">
                    <p className="chat-cont">I'm just looking around. Will you tell me something about
                        yourself?</p>
                    <p className="chat-time">8:20 a.m.</p>
                </div>
            </div>
        </div>
    )
};

export default ChatMenuContent;