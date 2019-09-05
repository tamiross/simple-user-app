import React, { Component } from 'react'
import { styles } from './styles';
import Navbar from '@components/navbar/navbar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = props => {
    return (
        <div style={styles.base}>
            <div className="container">
                <Navbar />
            </div>
        </div>
    )
}
