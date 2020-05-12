import React from "react";
import {UseScript} from "../../../../hooks";


const RegisterPageScripts = () => {
    return (
        <div>
            <UseScript url="\bower_components\modernizr\js\css-scrollbars.js"/>
            <UseScript url="\bower_components\i18next\js\i18next.min.js"/>
            <UseScript url="\bower_components\i18next-xhr-backend\js\i18nextXHRBackend.min.js"/>
            <UseScript url="\bower_components\i18next-browser-languagedetector\js\i18nextBrowserLanguageDetector.min.js"/>
            <UseScript url="\bower_components\jquery-i18next\js\jquery-i18next.min.js"/>
            <UseScript url="\assets\js\common-pages.js"/>
        </div>
    )
};

export default RegisterPageScripts;