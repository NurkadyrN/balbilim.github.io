import React from "react";
import './register-form-redux.css';
import {reduxForm} from 'redux-form'
import {signUpValidate} from "../../../../utils/validations";
import {Field} from "redux-form";
import {renderField} from "../../../../utils";
import RegisterSocial from "../register-social";
import RegisterFooter from "../register-footer";


const validate = (values) => {
    let errors = {};
    errors = signUpValidate(values, errors);
    return errors
};

const RegisterForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="md-float-material form-material register-form">
            <div className="text-center">
                <img src="\assets\images\logo.png" alt="logo.png"/>
            </div>
            <div className="auth-box card">
                <div className="card-block">
                    <div className="row m-b-20">
                        <div className="col-md-12">
                            <h3 className="text-center txt-primary">Sign up</h3>
                        </div>
                    </div>
                    {/*<RegisterSocial/>*/}
                    <p className="text-muted text-center p-b-5">Sign up with your regular account</p>
                    <div className="form-group form-primary">
                        <Field component={renderField} type="text" name="username" className="form-control" required=""
                               placeholder="Choose Username"/>

                    </div>
                    <div className="form-group form-primary">
                        <Field component={renderField} type="text" name="email" className="form-control" required=""
                               placeholder="Your Email Address"/>

                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group form-primary">
                                <Field component={renderField} type="password" name="password" className="form-control"
                                       required=""
                                       placeholder="Password"/>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group form-primary">
                                <Field component={renderField} type="password" name="password2"
                                       className="form-control" required=""
                                       placeholder="Confirm Password"/>

                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-12">
                            <button className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign up
                                now
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <RegisterFooter/>
                </div>
            </div>
        </form>
    )
};

const RegisterFormRedux = reduxForm({
    // a unique name for the form
    form: 'register',
    validate
})(RegisterForm);


export default RegisterFormRedux;

