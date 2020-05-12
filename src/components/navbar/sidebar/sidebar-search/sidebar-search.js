import React from "react";
import './sidebar-search.css';

const SidebarSearch = () => {
    return (
        <div className="chat-inner-header">
            <div className="back_chatBox">
                <div className="right-icon-control">
                    <input type="text" className="form-control  search-text"
                           placeholder="Search Friend"
                           id="search-friends"/>
                    <div className="form-icon">
                        <i className="icofont icofont-search"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SidebarSearch;