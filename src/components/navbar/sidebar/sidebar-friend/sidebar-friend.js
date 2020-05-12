import React from "react";
import './sidebar-friend.css'

const SidebarFriend = () => {
    return (
        <div className="media userlist-box" data-id="1" data-status="online"
             data-username="Josephin Doe" data-toggle="tooltip" data-placement="left"
             title="Josephin Doe">
            <a className="media-left" href="#!">
                <img className="media-object img-radius img-radius"
                     src="/assets/images/avatar-3.jpg"
                     alt="Generic placeholder"/>
                <div className="live-status bg-success"></div>
            </a>
            <div className="media-body">
                <div className="f-13 chat-header">Josephin Doe</div>
            </div>
        </div>
    )
};

export default SidebarFriend;