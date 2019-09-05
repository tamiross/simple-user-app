import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class Discover extends Component {
    render() {
        return (
            <>
            <div style={{ background: ' green', padding: 20 }}>
                DISCOVER PAGE!
            </div>
            <hr />
            <Link to={'/'}>
                    <Button variant="contained" color="primary">
                        Hello World~~
                    </Button>
                </Link>
            </>
        )
    }
}
