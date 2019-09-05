import React, { Component } from 'react'
import '@css/normalize.css';
import '@css/bootstrap-grid.css';
import '@css/bootstrap-align.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Discover from '@pages/discover';
import Home from '@pages/home';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/discover' component={Discover} />
                        <Route path='/' exact component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
