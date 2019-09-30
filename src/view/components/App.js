import React, { Component } from 'react'
import 'css/bootstrap-reboot.css';
import 'css/bootstrap-grid.css';
import 'css/bootstrap-align.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Discover from 'pages/discover';
import Home from 'pages/home/home';
import { HomeHooks } from 'pages/home/home_hooks';
import Register from 'pages/register/register';
import Blog from 'pages/blog/blog';

const APP_BASE_STYLE_CLASS = 'app-body'

export default class App extends Component {
    componentDidMount() {
        document.body.classList.add(APP_BASE_STYLE_CLASS);
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/discover' component={Discover} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/' exact component={Home} />
                        <Route path='/users' exact component={HomeHooks} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
