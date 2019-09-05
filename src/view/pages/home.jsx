
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from '@components/header/header';
import { colors } from '@colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { addUser, reset, deleteUser, fetchDemoData } from '@store/actions';
import { getDemoData } from '@helpers';
import styled from 'styled-components';

const ActionButton = styled.button`
font-size: 20px;
background: #eca200;
border: 1px solid green;
`;

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

    render() {
        const { isDataLoaded, users } = this.state;

        if (!isDataLoaded)
            return null;

        return (
            <>
                <Header text='THIS IS HEADER!! ' />
                <div className='container'>
                    <h1 style={{ color: colors.hoverBlue }}>Welcome to React!</h1>
                    <hr />
                    <Link to={'/discover'}>
                        <Button variant="contained" color="primary">
                            Hello World~~
                    </Button>
                    </Link>

                    <Button variant="contained" color="primary" onClick={this.onAddUserClick}>
                        ADD USER
                </Button>

                    <Button variant="contained" color="primary" onClick={this.onRemoveUserClick}>
                        DELETE USER
                </Button>

                    <Button variant="contained" color="primary" onClick={this.onResetClick}>
                        RESET !
                </Button>
                    <p>
                        Users counter:
                </p>
                    <h1>
                        {this.props.count}
                    </h1>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                Name: {user.name} | Email: {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
                <ActionButton>CREATE</ActionButton>
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