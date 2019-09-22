import React, { Component } from 'react'
import PageCreator from '@pages/page_creator/page_creator';
import { Input } from '@components/input/input';
import { Form } from '@components/form/form';
import { styles, ActionButtons } from './styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            firstName: '',
            lastName: ''
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    onInputChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    renderActionButtons() {
        return (
            <ActionButtons className='action-buttons'>
                <Button variant="contained" color='primary' style={styles.button} type='submit'>
                    {"Submit"}
                </Button>
                <Button variant="outlined" color='default' style={styles.button}>
                    {"Reset"}
                </Button>
            </ActionButtons>
        )
    }

    renderForm() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Input type='text' placeholder='First Name' value={this.state.firstName} onChange={(e) => this.onInputChange(e, 'firstName')} />
                <Input type='text' placeholder='Last Name' value={this.state.lastName} onChange={(e) => this.onInputChange(e, 'lastName')} />
                {this.renderActionButtons()}
            </Form>
        )
    }

    render() {
        return (
            <PageCreator style={styles.base}>
                <Grid container justify='center'>
                    <Grid item xs={12} sm={6}>
                        {this.renderForm()}
                    </Grid>
                </Grid>
            </PageCreator>
        )
    }
}
