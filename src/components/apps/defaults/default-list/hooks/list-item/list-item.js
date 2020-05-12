import {Td, Tr} from "react-super-responsive-table";
import ObjectActions from "../object-actions";
import React from "react";
import './list-item.css'
import Moment from "react-moment";

const ListItem = ({objects, moduleName, itemClick, editUrl, afterSubmit, search, deleteObject, titles}) => {
    return objects.map((object) => {
        const propsAction = {
            editUrl,
            moduleName,
            afterSubmit,
            object_id: object.id,
            search,
            deleteObject
        }
        return (
            <Tr key={object.id}>
                {titles.map((title) => {
                    const {field, type} = title;
                    let value = object[field]
                    if (type === 'datetime') {
                        value = value?<Moment element='span' format="DD-MM-YYYY HH:mm:ss">{value}</Moment>:''
                    }
                    if (field !== 'id') {
                        return (
                            <Td className='clicked-td' onClick={() => {
                                if (itemClick) {
                                    itemClick(object)
                                }
                            }} key={field}>{value}</Td>
                        )
                    }
                })}
                {ObjectActions(propsAction)}
            </Tr>)
    });
}

export default ListItem;
