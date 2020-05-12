import React from "react";
import './responsible-table.css';
import {withRouter} from "react-router-dom";
import Pagination from "react-js-pagination";
import setSearchParamsLocation from "../../utils/set-search-params-location";
import {Table, Thead, Tbody, Th, Tr} from 'react-super-responsive-table'
import {compose} from "../../utils";

const ResponsibleTable = ({title, items, itemCount, pageName = 'page', count, page, size, history: {push, location}}) => {
    const start = size * (page - 1) + 1;
    const end = start + itemCount - 1;
    const handlePageChange = (pageNumber) => {
        const params = {};
        params[pageName] = pageNumber
        push(setSearchParamsLocation(location, params));
    };
    return (
        <div>
            <div className="custom-row">
                <div className="padding-0 col-xs-12 col-sm-12">
                    <Table id="new-cons" className="table table-striped table-bordered nowrap">
                        <Thead>
                            <Tr>
                                {title}
                                <Th className='action-custom'>actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {items}
                        </Tbody>
                    </Table>
                </div>
            </div>
            <div className="custom-row">
                <div className="padding-0 col-md-5">
                    <div className="dataTables_info" id="new-cons_info" role="status"
                         aria-live="polite">Showing {start} to {end} of {count} entries
                    </div>
                </div>
                <div className="padding-0 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="res-config_paginate">
                        <Pagination
                            activePage={parseInt(page)}
                            itemClass="paginate_button page-item"
                            linkClass="page-link"
                            itemsCountPerPage={size}
                            prevPageText="<"
                            nextPageText=">"
                            totalItemsCount={count}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default compose(
    withRouter,
)(ResponsibleTable);
