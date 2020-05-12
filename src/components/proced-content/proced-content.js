import React from "react";

import './proced-content.css';

const ProcedContent = ({children}) => {
    return (
        <div className="pcoded-content">
            <div className="pcoded-inner-content">

                <div className="main-body">
                    <div className="page-wrapper">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProcedContent;
