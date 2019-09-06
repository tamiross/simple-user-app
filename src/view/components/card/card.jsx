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

        return <Text style={{ color: 'blue'}}>{email}</Text>
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
        const { onRemoveUserClick, onEditUserClick } = this.props;
        return (
            <ActionButtonWrapper className="action-buttons">
                <ActionButton onClick={onRemoveUserClick}>Remove</ActionButton>
                <ActionButton onClick={onEditUserClick}>Edit</ActionButton>
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
    style: PropTypes.object,
    address: PropTypes.object,
    email: PropTypes.string,
    name: PropTypes.string,
}