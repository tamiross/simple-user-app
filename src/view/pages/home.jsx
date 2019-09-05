
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from '@components/header/header';
import { colors } from '@colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { addUser, reset, deleteUser } from '@store/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        }
    }
    
    componentDidMount() {
        console.log('PROPS', this.props)

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
        return (
            <div>
                <Header text='THIS IS HEADER!! ' />
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Home)