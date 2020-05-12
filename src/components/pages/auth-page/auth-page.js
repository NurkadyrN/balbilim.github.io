import React, {useEffect} from "react";
import './auth-page.css'
import RegisterPageScripts from "./parts/register-page-scripts";
import RegisterFormRedux from "./register-form-redux";
import {setUser, loginUser} from '../../../actions'
import {bindActionCreators} from "redux";
import {compose} from "../../../utils";
import {withClassroomstoreService} from "../../../hoc";
import {connect} from "react-redux";
import {signUpSubmit, signInSubmit} from "../../../utils/validations";
import {Route, Switch} from "react-router-dom";
import LoginFormRedux from "./login-form-redux";
import IsNoAuth from "../../../hooks/is-no-auth";
import {positions, withAlert} from 'react-alert'


const AuthPage = ({setUser, loginUser, alert, error}) => {
    useEffect(()=>{
        if (error) {
            alert.error(error.detail, {position: positions.TOP_CENTER, timeout: 2000});
        }
    })
    return (
        <IsNoAuth>
            <section className="login-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <Switch>
                                <Route path="/auth/register" exact>
                                    <RegisterFormRedux onSubmit={signUpSubmit(setUser)}/>
                                </Route>
                                <Route path="/auth/login" exact>
                                    <LoginFormRedux onSubmit={signInSubmit(loginUser)}/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
                <RegisterPageScripts/>
            </section>
        </IsNoAuth>
    )
};


const mapStateToProps = ({user: {authenticated, error}}) => {
    return {authenticated, error};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        setUser: setUser(swapistoreService),
        loginUser: loginUser(swapistoreService),
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    withAlert(),
    connect(mapStateToProps, mapDispatchToProps)
)(AuthPage);


