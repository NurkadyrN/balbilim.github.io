import {confirmAlert} from "react-confirm-alert";
import CustomUi from "./custom-ui";
import React from "react";

const deleteNotification = (func,...params) => {
    confirmAlert({
        title: 'Вынимание',
        message: 'Вы дествительно хотите удалить.',
        customUI: (props) => <CustomUi {...props} />,
        buttons: [
            {
                label: 'Нет',
                background:'rgb(0, 169, 110)',
            },
            {
                label: 'Да',
                background:'rgb(255, 76, 76)',
                onClick: () => func(...params),
            },


        ]
    });
};

export default deleteNotification;
