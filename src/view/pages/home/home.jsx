
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from '@components/header/header';
import { addUser, deleteUser, fetchDemoData } from '@store/actions';
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

    onDeleteUserClick = (e) => {
        console.log('DELETE USER CLICK')
        this.props.dispatch(deleteUser())

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
            onDeleteUserClick: this.onDeleteUserClick,
            onEditUserClick: this.onEditUserClick
        }

        return <Card {...props} />
    }

    renderCards() {
        const { isDataLoaded } = this.state;

        if (!isDataLoaded)
            return null;

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

// Home.propTypes = {
//     dispatch: propTypes.func,
//     // users: propTypes.array
// }