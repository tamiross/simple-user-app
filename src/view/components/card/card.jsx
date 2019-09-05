import React, { Component } from 'react'
import { Base, Title, Hr, ActionButton, ActionButtonWrapper } from './styles';
import Text from '@components/text/text';
import PropTypes from 'prop-types';

export default class Card extends Component {
    renderName() {
        const { name } = this.props;

        return <Title>{name}</Title>
    }

    renderEmail() {
        const { email } = this.props;

        return <Text>{email}</Text>
    }

    renderAddress() {
        const { address, style } = this.props;
        
        return (
            <div style={style.address}>
                <Text>City: {address.city}</Text>
                <Text>Street: {address.street}</Text>
            </div>
        )
    }

    renderActionButtons() {
        return (
            <ActionButtonWrapper className="action-buttons">
                <ActionButton>Delete</ActionButton>
                <span>Edit</span>
                <span></span>
            </ActionButtonWrapper>
        )
    }

    render() {
        const { className, style } = this.props;

        return (
            <div style={style} className={className}>
                <Base>
                    {this.renderName()}
                    {this.renderEmail()}
                    <Hr />
                    {this.renderAddress()}
                    {this.renderActionButtons()}
                </Base>
            </div>
        )
    }
}

Card.propTypes = {
    className: PropTypes.string,
    style: {},
    address: {},
    email: PropTypes.string,
    name: PropTypes.string,
    enableMultiline: PropTypes.boolean
}