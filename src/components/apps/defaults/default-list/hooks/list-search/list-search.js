import SearchFieldRedux from "../../../../../../hooks/search-field/search-field";
import React from "react";

const ListSearch = ({name='search',pageName}) => {
    return (
        <div className="custom-row">
            <div className="padding-0 col-xs-12 col-sm-12 col-md-6">
                <div id="new-cons_filter" className="dataTables_filter"><label>
                    Search:<SearchFieldRedux
                    name={name}
                    pageName={pageName}
                    className="form-control input-sm"
                /></label>
                </div>
            </div>
        </div>
    )
}

export default ListSearch;
