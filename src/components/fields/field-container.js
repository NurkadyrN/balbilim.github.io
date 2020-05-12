import React from "react";
import {Link, withRouter} from "react-router-dom";

const FieldContainer = ({label = 'add label', formValues, helpText,name, children, model, location}) => {

    const toLink = `/edit/` + model;
    const {pathname, state: {prevEditPath = {}} = {}} = location;
    const editPath = {};
    editPath[toLink] = {value: formValues, prevPath: pathname,fieldName:name};
    if (prevEditPath[toLink]) {
        model = undefined
    }
    const className = model ? "col-10 col-sm-11" : "col-12";
    return (
        <div className="form-group row row-field">
            <label className="col-lg-12 col-form-label"><b>{label}</b></label>
            <div className="col-lg-12">
                {/*<div className={className}>*/}
                    {children}
                {/*</div>*/}
                {/*{model && <div className="col-sm-1 col-2 edit-related"><Link*/}
                {/*    to={{pathname: toLink, state: {prevEditPath: {...prevEditPath, ...editPath}}}}>+</Link></div>}*/}
                {helpText && <span className='help-text'>{helpText}</span>}
            </div>
        </div>
    )
};

export default withRouter(FieldContainer);
