import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Redux
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import root_reducer from './redux/root_reducer'
import thunk from 'redux-thunk';

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('middleware', store.getState())
    return result
}

const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(loggerMiddleware,
        thunk),
);
const store = createStore(
    root_reducer,
    enhancer
);
// Dom render
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
