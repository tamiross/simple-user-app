import React, { Component } from 'react'
import { Header } from './header/header.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header text='THIS IS HEADER!! '/>
                <h1>Welcome to React!</h1>
            </div>
        )
    }
}
