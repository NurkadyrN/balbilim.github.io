import React from "react";
import './custom-ui.css'

const CustomUi = ({buttons, message, title, onClose}) => {
    return (<div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span onClick={onClose} aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <p>{message}</p>
            </div>
            <div className="modal-footer">
                {buttons.map(({label, background='#01a9ac', onClick}) => {
                    return <button key={label} onClick={() => {
                        if (onClick) {
                            onClick()
                        }
                        onClose()
                    }} type="button" className="btn mobtn" style={{background}}>{label}</button>
                })}
            </div>
        </div>
    </div>)
};

export default CustomUi;
