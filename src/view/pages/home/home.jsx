
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from '@components/header/header';
import { Link } from 'react-router-dom';
import { addUser, removeUser, fetchDemoData } from '@store/actions';
import { getDemoData } from '@helpers';
import Card from '@components/card/card';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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

    onRemoveUserClick = (e) => {
        console.log('REMOVE USER CLICK', e.target)
        this.props.dispatch(removeUser())

    }

    onEditUserClick = () => {
        console.log('EDIT')
    }

    renderCard(user) {
        console.log('USER OBJ: ', user)
        const props = {
            key: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            className: 'col-12 col-md-6 col-lg-4 col-xl-3',
            style: styles,
            onRemoveUserClick: this.onRemoveUserClick,
            onEditUserClick: this.onEditUserClick
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
        const { isDataLoaded, users } = this.state;

        if (!isDataLoaded)
            return null;

        return (
            <>
                <Header text='THIS IS HEADER!! ' />
                <div className='container'>
                    <div style={styles.cardsWrapper} className="row">
                        {this.renderCards()}
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
