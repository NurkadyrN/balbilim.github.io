import React from "react";
import './login-form-redux.css';
import {reduxForm} from 'redux-form'
import {signInValidate} from "../../../../utils/validations";
import {Field} from "redux-form";
import {renderField} from "../../../../utils";
import {Link} from "react-router-dom";


const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="md-float-material form-material register-form">
            <div className="text-center">
                <img src="\assets\images\logo.png" alt="logo.png"/>
            </div>
            <div className="auth-box card">
                <div className="card-block">
                    <div className="row m-b-20">
                        <div className="col-md-12">
                            <h3 className="text-center txt-primary">Sign In</h3>
                        </div>
                    </div>
                    {/*<RegisterSocial/>*/}
                    <p className="text-muted text-center p-b-5">Sign in with your regular account</p>
                    <div className="form-group form-primary">
                        <Field component={renderField} type="text" name="username" className="form-control" required=""
                               placeholder="Username"/>
                    </div>
                    <div className="form-group form-primary">
                        <Field component={renderField} type="password" name="password" className="form-control"
                               required=""
                               placeholder="Password"/>
                    </div>
                    <div className="row m-t-25 text-left">
                        <div className="col-12">
                            <div className="checkbox-fade fade-in-primary">
                                <label>
                                    <input type="checkbox" value=""/>
                                    <span className="cr"><i
                                        className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                    <span className="text-inverse">Remember me</span>
                                </label>
                            </div>
                            <div className="forgot-phone text-right f-right">
                                <a href="auth-reset-password.htm" className="text-right f-w-600"> Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-12">
                            <button type="submit"
                                    className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN
                            </button>

                        </div>
                    </div>
                    <p className="text-inverse text-left">Don't have an account?
                        <Link to="/auth/register"> <b
                            className="f-w-600">Register here </b></Link>for free!</p>
                </div>
            </div>
        </form>
    )
};

const LoginFormRedux = reduxForm({
    // a unique name for the form
    form: 'login',
    validate:signInValidate,
})(LoginForm);


export default LoginFormRedux;

