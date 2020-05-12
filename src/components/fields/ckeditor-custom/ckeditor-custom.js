import React from "react";
import {Field} from "redux-form";
import './ckeditor-custom.css';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {getCookie} from "../../../hooks";
import {withRouter} from "react-router-dom";
import ErrorField from "../error-field/error-field";
import {CK_EDITOR_UPLOAD_URL} from "../../../settings/setting";

const CKEditorRender = ({input, data, nameCustom, changeField, moduleName, meta, id}) => {
    return (
        <div>
            <input type='text' value={data} className='display-none' onChange={input.onChange}/>
            <CKEditor
                editor={ClassicEditor}
                data={data}
                config={{
                    simpleUpload: {
                        uploadUrl: CK_EDITOR_UPLOAD_URL,
                        headers: {
                            'Authorization': `Token ${getCookie('token')}`
                        },
                        body: {moduleName, object_id: id}
                    },
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    changeField(nameCustom, data)
                }}
                onInit={(editor) => {
                    editor.setData(data);
                }}
            />
            <ErrorField meta={meta}/>
        </div>
    )
}

const CKEditorCustom = ({match: {params: {moduleName = 'Quizzes', id = ''}}, change, data = '', name}) => {
    return (
        <div>
            <Field component={CKEditorRender} id={id}
                   moduleName={moduleName} changeField={change} data={data} name={name}
                   nameCustom={name}/>
            <br/>
        </div>)
}

export default withRouter(CKEditorCustom);
