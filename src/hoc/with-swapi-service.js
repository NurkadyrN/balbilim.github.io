import React from 'react';
import {SwapiServiceConsumer} from "./swapi-service-context";

const withClassroomstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapistoreService) => {
                        return (<Wrapped {...props}
                                         swapistoreService={swapistoreService}/>);
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};

export default withClassroomstoreService;
