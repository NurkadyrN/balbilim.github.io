import React from "react";
import './show-chat-inner.css';
import MessageMenuSend from "./message-menu-send";
import ChatMenuContent from "../chat-menu-content";
import ChatMenuReply from "../chat-menu-reply";

const ShowChatInner = () => {
    return (
        <div className="showChat_inner">
            <div className="media chat-inner-header">
                <span className="back_chatBox">
                    <i className="feather icon-chevron-left"/> Josephin Doe
                </span>
            </div>
            <ChatMenuContent/>
            <ChatMenuReply/>
            <MessageMenuSend/>
        </div>
    )
};

export default ShowChatInner;
