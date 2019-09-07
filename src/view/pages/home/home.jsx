
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from '@components/header/header';
import { addUser, deleteUser, fetchDemoData } from '@store/actions';
import { getDemoData } from '@helpers';
import Card from '@components/card/card';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import UserList from '@components/user_list/user_list';

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
        console.log('PROPS', this.props)
        getDemoData()
            .then(json => {
                this.props.dispatch(fetchDemoData(json));
                this.setState({
                    isDataLoaded: true,
                    users: json
                })
            })

    }

    onAddUserClick = () => {
        console.log('ADD USER CLICK')
        this.props.dispatch(addUser())
    }

    onDeleteUserClick = (e) => {
        console.log('DELETE USER CLICK')
        this.props.dispatch(deleteUser())

    }

    onEditUserClick = () => {
        console.log('EDIT')
    }

    renderPlusButton() {
        const props = {
            variant: 'contained',
            style: styles.plusButton,
            onClick: this.openDialog,
            color: 'secondary'
        }

        return (
            <Button {...props}>
                <AddIcon />
            </Button>
        )
    }

    render() {
        return (
            <>
                <Header text='THIS IS HEADER!! ' />
                <div className='container'>
                    <div style={styles.cardsWrapper}>
                        <UserList users={this.state.users} className='row' />
                    </div>
                </div>
                {this.renderPlusButton()}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
        users: state.users
    }
}

export default connect(mapStateToProps)(Home)

// Home.propTypes = {
//     dispatch: propTypes.func,
//     // users: propTypes.array
// }