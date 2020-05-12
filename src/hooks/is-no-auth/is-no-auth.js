import React from 'react';
import {compose} from "../../utils";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";


const IsNoAuth = ({children, authenticated, location: {state: {prevPath = '/'} = {}, pathname}}) => {
    if (prevPath === '/logout') {
        return <Redirect from='/' to='/'/>
    } else if (authenticated && prevPath !== pathname) {
        return <Redirect from='/' to={prevPath}/>
    }
    return children;


};

const mapStateToProps = ({user: {authenticated}}) => {
    return {authenticated};
};

export default compose(
    withRouter,
    connect(mapStateToProps)
)(IsNoAuth);