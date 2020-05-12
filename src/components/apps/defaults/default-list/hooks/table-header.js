import {Th} from "react-super-responsive-table";
import React from "react";

const TableHeader = ({titles}) =>{
    return  titles.map((title) => {
        if (title.field !== 'id') {
            const label = title.label ? title.label : title.field;
            return (
                <Th key={title.field}>{label}</Th>
            )
        }
    });
}

export default TableHeader;
