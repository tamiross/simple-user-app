import React, { Component } from 'react'
import { MediaCard } from'components/media_card/media_card';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import DefaultCoverImage from 'assets/images/default_cover_image.jpg'

export default class UserList extends Component {
    renderCard(user) {
        const { onDeleteUserClick, onEditUserClick } = this.props;

        const props = {
            key: user.id,
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            image: DefaultCoverImage,
            onDeleteUserClick: onDeleteUserClick,
            // onEditUserClick: onEditUserClick
        }

        return (
            <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
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
