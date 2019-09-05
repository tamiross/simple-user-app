
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from '@components/header/header';
import { Link } from 'react-router-dom';
import { addUser, reset, deleteUser, fetchDemoData } from '@store/actions';
import { getDemoData } from '@helpers';
import Card from '@components/card/card';
import { styles } from './styles';


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

    onRemoveUserClick = () => {
        console.log('REMOVE USER CLICK')
        this.props.dispatch(deleteUser())

    }

    onResetClick = () => {
        console.log('RESET!')
        this.props.dispatch(reset())
    }

    renderCard(user) {
        console.log('USER OBJ: ', user)
        const props = {
            key: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            className: 'col-12 col-md-6 col-lg-4 col-xl-3',
            style: styles
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
                <hr />
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
