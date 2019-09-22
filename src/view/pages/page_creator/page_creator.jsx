import React, { Component } from 'react'
import { Header } from '@components/header/header';
import { Container } from '@material-ui/core';
import { styles} from './styles';

export default class PageCreator extends Component {
    // componentDidMount() {
    //     console.log('Count: ', React.Children.count(this.props.children))
    // }

    render() {
        const { children, style } = this.props;
        const pageBodyStyle = { ...styles.base, style };

        return (
            <div>
                <Header />
                <Container style={pageBodyStyle}>
                    {children}
                </Container>
            </div>

        )
    }
}
