import React from "react";
import './register-social.css';

const RegisterSocial = () => {
    return (
        <div className="row m-b-20">
            <div className="col-md-6">
                <a href="#!" className="btn btn-facebook m-b-20 btn-block waves-effect waves-light"><i
                    className="icofont icofont-social-facebook"></i>facebook</a>
            </div>
            <div className="col-md-6">
                <a href="#!" className="btn btn-twitter m-b-0 btn-block waves-effect waves-light"><i
                    className="icofont icofont-social-twitter"></i>twitter</a>
            </div>
        </div>
    )
};

export default RegisterSocial;