import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '@store/reducers';

const appElement = document.getElementById('app')
const devToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const storeEnhancers = (applyMiddleware(thunk), devToolsExtention)
const store = createStore(reducer, storeEnhancers);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, appElement);