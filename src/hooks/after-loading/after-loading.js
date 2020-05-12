import React from "react";
import Spinner from "../spinner";

const AfterLoading = ({children, loading}) => {
    if (loading === undefined) {
        console.log('Please giv me loading variable');
    }
    if (!loading) {
        return children;
    }
    return null;
};

export default AfterLoading;
