import React from 'react';
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "../../utils";
import {connect} from "react-redux";


const IsClassroomExist = ({children, loading,id,location: {pathname}}) => {
    if (!loading && !id) {
        return <Redirect from={pathname} to={{pathname: '/classroom', state: {prevPath: pathname}}}/>
    }
    return children;

};
const mapStateToProps = ({classroom: {classroomDetail:{classroom:{id},loading}}}) => {
    return {loading,id};
};

export default compose(
    withRouter,
    connect(mapStateToProps)
)(IsClassroomExist);
