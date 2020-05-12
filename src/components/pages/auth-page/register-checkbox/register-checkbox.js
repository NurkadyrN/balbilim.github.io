import React from "react";
import './register-checkbox.css';
import {Field} from "redux-form";

const RegisterCheckbox = () => {
    return (
        <div className="row m-t-25 text-left">
            <div className="col-md-12">
                <div className="checkbox-fade fade-in-primary">
                    <label>
                        <Field component={'input'} type="checkbox" value=""/>
                        <span className="cr"><i
                            className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                        <span className="text-inverse">I read and accept <a
                            href="#">Terms &amp; Conditions.</a></span>
                    </label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="checkbox-fade fade-in-primary">
                    <label>
                        <Field component={'input'} type="checkbox" value=""/>
                        <span className="cr"><i
                            className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                        <span className="text-inverse">Send me the <a
                            href="">Newsletter</a> weekly.</span>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default RegisterCheckbox;