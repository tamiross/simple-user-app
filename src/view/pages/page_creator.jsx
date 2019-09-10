import React, { Component } from 'react'
import { Header } from '@components/header/header';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

export default class PageCreator extends Component {
    componentDidMount() {
        console.log('Count: ', React.Children.count(this.props.children))
    }

    render() {
        const { children } = this.props;

        return (
            <div>
                <Header />
                <Container>
                    {children}
                </Container>
            </div>

        )
    }
}
