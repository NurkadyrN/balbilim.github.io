import React from "react";
import './user-header-dropdown.css';
import UserHeaderProfile from "../user-header-profile";
import {bindActionCreators} from "redux";
import {getUser} from "../../../../actions";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";

const UserHeaderDropdown = ({avatar,username}) => {
    return (
        <div className="dropdown-primary dropdown">
            <div className="dropdown-toggle" data-toggle="dropdown">
                <img src={avatar} className="img-radius"
                     alt="User-Profile-Image"/>
                <span>{username}</span>
                <i className="feather icon-chevron-down"></i>
            </div>
            <UserHeaderProfile/>
        </div>
    )
};

const mapStateToProps = ({user:{user:{avatar,username}}}) => {
    if (!avatar){
        avatar = "/assets/images/avatar-4.jpg";
    }
    return {avatar,username};
};


export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps)
)(UserHeaderDropdown);
