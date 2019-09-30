
import React, { useState, useEffect } from 'react'
import { Header } from 'components/header/header';
import { addUser, deleteUser, fetchDemoData } from 'store/actions/actions';
import { getDemoData } from 'helpers';
import * as config from 'config';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import UserList from 'components/user_list/user_list';
import { loc } from 'texts';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

export const HomeHooks = props => {
    const [isDataLoaded, setDataLoaded] = useState(false);
    const [users, setUsersData] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        console.count('useEffect count')
        const usersUrl = config.getUsersUrl();

        getDemoData(usersUrl)
            .then(json => {
                dispatch(fetchDemoData(json));
                setUsersData(json)
                setDataLoaded(true)
            })
            .catch(error => {
                console.log('Error while loading data:', error)
            })

    }, [isDataLoaded])

    const onAddUserClick = () => {
        props.dispatch(addUser())
    }

    const onDeleteUserClick = userId => {
        props.dispatch(deleteUser(userId))

    }

    const onEditUserClick = () => {
        console.log('EDIT')
    }

    const renderPlusButton = () => {
        const props = {
            variant: 'contained',
            style: styles.plusButton,
            onClick: () => console.log('Click!'),
            color: 'secondary',
        }

        return (
            <Button {...props}>
                <AddIcon />
            </Button>
        )
    }

    const renderNoDataMessage = () => {
        return (
            <div style={styles.noDataMessage}>
                <h1>{loc('cannotGetInitial')}</h1>
                <p>{loc('pleaseCheckYourConnection')}</p>
            </div>
        )
    }

    const renderUsersList = () => {
        const userListProps = {
            users: users,
            onDeleteUserClick: onDeleteUserClick,
            onEditUserClick: onEditUserClick
        }

        const usersList = isDataLoaded ? <UserList {...userListProps} /> : renderNoDataMessage()
        console.log('users-list: ', usersList)

        return usersList;
    }

    return (
        <>
            <Header />
            <Container fixed>
                <h1 style={{ marginTop: 16}}>Users List with hooks</h1>
                <Grid container spacing={2} style={styles.userListWrapper}>
                    {renderUsersList()}
                </Grid>
                {renderPlusButton()}
            </Container>
        </>
    )
}
