import React, { Component } from 'react'
import Card from '@components/card/card';
import { styles } from './styles';

export default class UserList extends Component {
    renderCard(user) {
        const { onDeleteUserClick, onEditUserClick } = this.props;

        const props = {
            id: user.id,
            key: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            className: 'col-12 col-md-6 col-lg-4 col-xl-3',
            style: styles,
            onDeleteUserClick: onDeleteUserClick,
            // onEditUserClick: onEditUserClick
        }

        return <Card {...props} />
    }

    renderCards() {
        const { users } = this.props;

        if (!users)
            return null;

        return users.map(user => {
            return this.renderCard(user);
        })

    }

    render() {
        const { className } = this.props;

        return (
            <div className={className}>
                {this.renderCards()}
            </div>
        )
    }
}
