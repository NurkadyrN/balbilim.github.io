import React from "react";
import './sidebar.css'
import SidebarSearch from "./sidebar-search";
import SidebarFriendList from "./sidebar-friend-list";

const Sidebar = () => {
    return (
        <div id="sidebar" className="users p-chat-user showChat">
            <div className="had-container">
                <div className="card card_main p-fixed users-main">
                    <div className="user-box">
                        <SidebarSearch/>
                        <SidebarFriendList/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;