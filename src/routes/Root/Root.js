import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../Home';
import createStore from '../../store';

const store = createStore({carrier: 'all'});

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Home}/>
        </Router>
    </Provider>
);

export default Root;
