
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '@components/header/header';
import { addUser, deleteUser, fetchDemoData } from '@store/actions';
import { getDemoData } from '@helpers';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import UserList from '@components/user_list/user_list';
import { loc } from '@texts';

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
        getDemoData()
            .then(json => {
                this.props.dispatch(fetchDemoData(json));
                this.setState({
                    isDataLoaded: true,
                    users: json
                })
            })
            .catch(error => {
                console.log('error white loading data:', error)
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
        const { users, isDataLoaded } = this.state;

        const userListProps = {
            users: users,
            className: 'row',
            onDeleteUserClick: this.onDeleteUserClick,
            onEditUserClick: this.onEditUserClick
        }

        return (
            <>
                <Header />
                <div className='container'>
                    {this.renderPlusButton()}
                    <div style={styles.userListWrapper}>
                        {isDataLoaded ? <UserList {...userListProps} /> : this.renderNoDataMessage()}
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Home)

// Home.PropTypes = {
    // dispatch: propTypes.func,
//     // users: propTypes.array
// }

// proptypes do not work.