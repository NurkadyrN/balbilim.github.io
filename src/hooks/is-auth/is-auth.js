import React from 'react';
import {compose} from "../../utils";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";


const IsAuth = ({children, authenticated, loading, location: {pathname}}) => {

    if (!authenticated && !loading) {
        return <Redirect from={pathname} to={{pathname: '/auth/login', state: {prevPath: pathname}}}/>
    }
    return children;

};

const mapStateToProps = ({user: {authenticated, loading}}) => {
    return {authenticated, loading};
};

export default compose(
    withRouter,
    connect(mapStateToProps)
)(IsAuth);