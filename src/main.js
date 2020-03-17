import React, {Component} from "react";
import App from "./App.js";
import {Provider} from "react-redux";
import configureStore, {history} from './store'

import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
import './polyfill';

const store = configureStore(/* provide initial state if any */);

class Main extends Component {

    componentDidCatch(error, errorInfo) {
        console.error(error);
    }

    render() {
        return <Provider store={store}>
            <App history={history} />
        </Provider>;
    }
}

export default Main;