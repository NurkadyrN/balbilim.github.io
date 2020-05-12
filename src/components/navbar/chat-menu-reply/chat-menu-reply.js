import React from "react";
import './chat-menu-reply.css'

const ChatMenuReply = () => {
    return (
        <div className="media chat-messages">
            <div className="media-body chat-menu-reply">
                <div className="">
                    <p className="chat-cont">I'm just looking around. Will you tell me something about
                        yourself?</p>
                    <p className="chat-time">8:20 a.m.</p>
                </div>
            </div>
            <div className="media-right photo-table">
                <a href="#!">
                    <img className="media-object img-radius img-radius m-t-5"
                         src="/assets/images/avatar-4.jpg"
                         alt="Generic placeholder"/>
                </a>
            </div>
        </div>
    )
};

export default ChatMenuReply;