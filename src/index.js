import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '@store/reducers';

const appElement = document.getElementById('app')
const devToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devToolsExtention);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, appElement);