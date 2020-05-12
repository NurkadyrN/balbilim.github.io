import React from "react";
import {UseScript} from "../../../hooks";



const Scripts = () => {
    return (
        <div>
            <UseScript url="/assets/js/jquery.mCustomScrollbar.concat.min.js"/>
            <UseScript url="/assets/js/pcoded.min.js"/>
            <UseScript url="/assets/js/vartical-layout.min.js"/>
            <UseScript url="/assets/js/script.min.js"/>
            <UseScript url="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"/>
            <UseScript url="https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js"/>
        </div>
    )
};

export default Scripts;
