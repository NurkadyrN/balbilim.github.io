import React from "react";
import './edit-page.css'
import {withRouter} from "react-router-dom";
import LoadOptions from "./hooks/load-options";
import EditPageRender from "./edit-page-render";


const EditPage = ({match: {params: {moduleName}},id,editSubmit,object, customModuleName}) => {
    const showModuleName = customModuleName || moduleName
    return (
        <LoadOptions moduleName={showModuleName}>
            <EditPageRender {...{id, editSubmit,object}} moduleName={showModuleName}/>
        </LoadOptions>
    )
};

export default withRouter(EditPage);


