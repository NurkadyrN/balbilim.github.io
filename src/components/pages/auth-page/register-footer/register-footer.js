import React from "react";

import './register-footer.css';

const RegisterFooter = () => {
    return (
        <div className="row">
            <div className="col-md-10">
                <p className="text-inverse text-left m-b-0">Thank you.</p>
                <p className="text-inverse text-left"><a href="index-1.htm"><b className="f-w-600">Back
                    to website</b></a></p>
            </div>
            <div className="col-md-2">
                <img src="\assets\images\auth\Logo-small-bottom.png" alt="small-logo.png"/>
            </div>
        </div>
    )
};

export default RegisterFooter;