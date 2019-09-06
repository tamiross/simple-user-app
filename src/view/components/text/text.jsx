import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Text extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <div style={style}>
                {children}
            </div>
        )
    }
}

Text.propTypes  = {
    style: PropTypes.object
}