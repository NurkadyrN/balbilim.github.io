import React from "react";
import './nav-search.css'

const NavSearch = () => {
    return (
        <div className="main-search morphsearch-search">
            <div className="input-group">
                <span className="input-group-addon search-close">
                    <i className="feather icon-x"></i>
                </span>
                <input type="text" className="form-control"/>
                <span className="input-group-addon search-btn">
                    <i className="feather icon-search"></i>
                </span>
            </div>
        </div>
    )
};

export default NavSearch;