import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './styles';
import { loc } from '@texts';
import A from '@components/a/a';

function onMenuClick() {
    console.log('MENU CLICK')
}

export default function Navbar() {
    const menuIconProps = {
        edge: 'start',
        style: styles.menuButton,
        color: 'inherit',
        'aria-label': 'menu',
        onClick: onMenuClick
    }

    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton {...menuIconProps}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" style={styles.title}>
                        {loc('allUsers')}
                    </Typography>

                    <A href={loc('linkToGithub')} style={{ color: 'white'}}>
                        <Button color="inherit">
                            {loc('viewOnGithub')}
                        </Button>
                    </A>
                </Toolbar>
            </AppBar>
        </div>
    );
}