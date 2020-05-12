import React from "react";
import './sidebar-friend-list.css';
import SidebarFriend from "../sidebar-friend";

const SidebarFriendList = () => {
    return (
        <div className="main-friend-list">
            <SidebarFriend/>
            <SidebarFriend/>
            <SidebarFriend/>
            <SidebarFriend/>
            <SidebarFriend/>
        </div>
    )
};
export default SidebarFriendList;