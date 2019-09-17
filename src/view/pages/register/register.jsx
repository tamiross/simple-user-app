import React, { Component } from 'react'
import PageCreator from '@pages/page_creator/page_creator';
import { Input } from '@components/input/input';
import { Form } from '@components/form/form';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';

export default class Register extends Component {
    render() {
        return (
            <PageCreator style={styles.base}>
                <Grid container justify='center'>
                    <Grid item xs={12} md={6}>
                        <Form>
                            <Input type='text' placeholder='First Name' />
                            <Input type='text' placeholder='Last Name' />
                        </Form>
                    </Grid>
                </Grid>
            </PageCreator>
        )
    }
}
