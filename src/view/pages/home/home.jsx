
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from 'components/header/header';
import { addUser, deleteUser, fetchDemoData } from 'store/actions';
import { getDemoData } from 'helpers';
import * as config from 'config';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import UserList from 'components/user_list/user_list';
import { loc } from 'texts';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            users: [],
            isDataLoaded: false
        }
    }

    componentDidMount() {
        const usersUrl = config.getUsersUrl();

        getDemoData(usersUrl)
            .then(json => {
                this.props.dispatch(fetchDemoData(json));
                this.setState({
                    isDataLoaded: true,
                    users: json
                })
            })
            .catch(error => {
                console.log('Error while loading data:', error)
            })

    }

    onAddUserClick = () => {
        this.props.dispatch(addUser())
    }

    onDeleteUserClick = userId => {
        this.props.dispatch(deleteUser(userId))

    }

    onEditUserClick = () => {
        console.log('EDIT')
    }

    renderPlusButton() {
        const props = {
            variant: 'contained',
            style: styles.plusButton,
            onClick: this.openDialog,
            color: 'secondary',
        }

        return (
            <Button {...props}>
                <AddIcon />
            </Button>
        )
    }

    renderNoDataMessage() {
        return (
            <div style={styles.noDataMessage}>
                <h1>{loc('cannotGetInitial')}</h1>
                <p>{loc('pleaseCheckYourConnection')}</p>
            </div>
        )
    }

    render() {
        const { isDataLoaded } = this.state;
        const userListProps = {
            users: this.props.users,
            onDeleteUserClick: this.onDeleteUserClick,
            onEditUserClick: this.onEditUserClick
        }

        const usersList = isDataLoaded ? <UserList {...userListProps} /> : this.renderNoDataMessage()

        return (
            <>
                <Header />
                <Container fixed>
                    <Grid container spacing={2} className='Grid' style={styles.userListWrapper}>
                        {usersList}
                    </Grid>
                    {this.renderPlusButton()}
                </Container>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: [...state.users]
    }
}

export default connect(mapStateToProps)(Home)
