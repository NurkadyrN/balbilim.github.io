import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import store from "./store";
import ErrorBoundary from "./hooks/error-boundary";
import {SwapiServiceProvider} from "./hoc/swapi-service-context";
import {Provider} from "react-redux";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertBasicTemplate from "./hooks/alert-basic-template";
import SwapiService from "./services/swapi-service";
import AlertMessages from "./hooks/alert-messages/alert-messages";

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    // timeout: 5000,
    offset: '20px',
    containerStyle: {
        zIndex: 100000
    },
    // you can also just use 'scale'
    transition: transitions.SCALE
};




const swapiService = new SwapiService();
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <SwapiServiceProvider value={swapiService}>
                <AlertProvider template={AlertBasicTemplate} {...options}>
                    <AlertMessages/>
                    <App/>
                </AlertProvider>
            </SwapiServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
