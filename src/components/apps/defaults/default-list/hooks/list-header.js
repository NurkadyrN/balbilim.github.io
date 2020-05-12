import {Link, withRouter} from "react-router-dom";
import MODEL_PARAMS from "../../../../../settings/model-params";
import React from "react";

const ListHeader = ({moduleName, location: {pathname}, label, path}) => {
    const showLabel = label || MODEL_PARAMS[moduleName].label
    const toPath = path || "/edit/" + moduleName
    return (
        <div className="card-header">
            <Link to={{pathname: toPath, state: {afterSubmit: pathname}}}>
                <button className='btn btn-primary list-add-button'>{showLabel} <i className="fa fa-plus"/></button>
            </Link>
            <div className="card-header-right">
                <ul className="list-unstyled card-option">
                    <li><i className="feather icon-maximize full-card"></i></li>
                    <li><i className="feather icon-minus minimize-card"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(ListHeader);
