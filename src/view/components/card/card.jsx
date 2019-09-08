import React, { Component } from 'react'
import { Base, Title, Hr, ActionButton, ActionButtonWrapper } from './styles';
import Text from '@components/text/text';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Card extends Component {
    componentDidMount() {
        // console.log('CARD PROPS >> ', this.props)
    }
    renderName() {
        const { name } = this.props;

        return <Title>{name}</Title>
    }

    renderEmail() {
        const { email } = this.props;

        return <Text style={{ color: 'blue' }}>{email}</Text>
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

    onDeleteUserClick = (userId) => {
        const { onDeleteUserClick } = this.props;
        // console.log('USER ID >> ', userId)
        onDeleteUserClick(userId)
    }

    renderDeleteButton() {
        const { id } = this.props;

        return (
            <IconButton onClick={() => this.onDeleteUserClick(id)}>
                <DeleteIcon />
            </IconButton >
        )
    }

    renderEditButton() {
        return (
            <IconButton>
                <CommentIcon />
            </IconButton>
        )
    }

    renderActionButtons() {
        return (
            <ActionButtonWrapper className="action-buttons">
                {this.renderEditButton()}
                {this.renderDeleteButton()}
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