import React from "react";
import './li-link.css'
import {Link} from "react-router-dom";

const LiLink = ({icon,value,...props}) => {
    return (
        <li>
            <Link {...props} >
                <i className={`feather ${icon}`}></i> {value}
            </Link>
        </li>
    )
};

export default LiLink;