import React, {useEffect} from "react";
import {compose} from "../../../utils";
import {withClassroomstoreService} from "../../../hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logoutUser} from "../../../actions";

const Logout = ({logoutUser}) => {
    useEffect(() => {
        logoutUser();
    }, [])

    return null
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        logoutUser: logoutUser(swapistoreService),
    }, dispatch);
};


export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Logout);
