import {Link} from "react-router-dom";
import {Td} from "react-super-responsive-table";
import React from "react";
import urlAddSubUrl from "../../../../../hooks/url-add-sub-url";

const ObjectActions = ({editUrl,moduleName,afterSubmit,object_id,search,deleteObject}) => {
    const editPath = editUrl?urlAddSubUrl(editUrl,object_id):`/edit/${moduleName}/${object_id}`
    return (
        <Td>
            <Link className="icofont icofont-ui-edit" to={{pathname:editPath, state:{afterSubmit}}}/>
            <span className="icofont icofont-ui-delete" onClick={()=>{deleteObject(moduleName,object_id,search)}}/>
        </Td>
    )
}
export default ObjectActions;
