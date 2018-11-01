import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import decode from 'jwt-decode';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/rootReducer';
import { userLoggedIn } from './store/actions/auth';
import setAuthorizationHeader from './util/setAuthorizationHeader';

const loggerMiddleware = store => next => action =>{
    console.log('dispatching', action);
    next(action)
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,loggerMiddleware)));

if(localStorage.myappJWT){
    const payload = decode(localStorage.myappJWT);
    const user = {
        
        token: localStorage.myappJWT,
        email: payload.email,
        confirmed: payload.confirmed,
        username: payload.username
    }
    setAuthorizationHeader(localStorage.myappJWT);
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
