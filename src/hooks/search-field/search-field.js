import React, {Component} from "react";
import {Field, reduxForm, getFormValues} from "redux-form";
import {compose} from "../../utils";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import getSearchParams from "../../utils/get-saerch-params";
import setSearchParamsLocation from "../../utils/set-search-params-location";


class SearchField extends Component {
    componentDidMount() {
        const {location: {search = ''}, change, name} = this.props;
        const searchVal = getSearchParams(search, [name])
        change(name, searchVal)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {formValues: prevFormValues = {}} = prevProps;
        const {history: {push, location}, formValues = {}} = this.props;
        const {search} = location;
        const {name, pageName = 'page'} = this.props;
        const searchVal = getSearchParams(search, [name])

        if (formValues[name] !== prevFormValues[name] && searchVal !== formValues[name]) {
            const params = {}
            params[name] = formValues[name] || '';
            params[pageName] = 1;
            push(setSearchParamsLocation(location, params));
        }
    }

    render() {
        const {className = '', name} = this.props;

        return <Field component='input' type='search' name={name} className={className}/>
    }
}

const SearchFieldRedux = reduxForm({
    form: 'search',
})(SearchField);


const mapStateToProps = (state) => {
    const formValues = getFormValues('search')(state);
    return {formValues};
};


export default compose(
    withRouter,
    connect(mapStateToProps)
)(SearchFieldRedux);
