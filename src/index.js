import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '@store/reducers';
import ErrorBoundary from '@components/error_boundary/error_boundary';

const appElement = document.getElementById('app')
const devToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const storeEnhancers = (applyMiddleware(thunk), devToolsExtention)
const store = createStore(reducer, storeEnhancers);

const app = (
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>
);

ReactDOM.render(app, appElement);