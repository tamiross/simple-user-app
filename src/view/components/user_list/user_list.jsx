import React, { Component } from 'react'
import { MediaCard } from'components/card/card';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';

export default class UserList extends Component {
    renderCard(user) {
        const { onDeleteUserClick, onEditUserClick } = this.props;

        const props = {
            id: user.id,
            key: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            // className: 'col-12 col-md-6 col-lg-4 col-xl-3',
            style: styles,
            onDeleteUserClick: onDeleteUserClick,
            // onEditUserClick: onEditUserClick
        }

        return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Grid container justify='center'>
                    <MediaCard {...props} />
                </Grid>
            </Grid>
        );

        return <MediaCard {...props} />
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
        return (
            this.renderCards()
        )
    }
}
