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
import MenuDrawer from '@components/drawer/drawer';
import { SearchBox } from '@components/search_box/search_box';

const menuItems = [
    { text: 'About', path: '/'},
    { text: 'Blog', path: '/blog'},
    { text: 'Join', path: '/'},
    { text: 'Register', path: '/register'}
]

export function Header() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const renderTitle = () => {
        return (
            <Typography variant="h6" style={styles.title}>
                {loc('allUsers')}
            </Typography>
        )
    }

    const renderViewOnGithub = () => {
        return (
            <A href={loc('linkToGithub')} style={styles.githubLink}>
                <Button color="inherit">
                    {loc('viewOnGithub')}
                </Button>
            </A>
        )
    }

    const renderMenuIconButton = () => {
        const props = {
            edge: 'start',
            style: styles.menuButton,
            color: 'inherit',
            'aria-label': 'menu',
            onClick: toggleDrawer('left', true)
        }

        return (
            <IconButton {...props}>
                <MenuIcon />
            </IconButton>
        )
    }

    const renderSearchBox = () => {
        return <SearchBox />;
    }

    return (
        <div style={styles.root}>
            <MenuDrawer state={state} toggleDrawer={toggleDrawer} menuItems={menuItems} style={styles.menuDrawer}/>
            <AppBar position="static">
                <Toolbar>
                    {renderMenuIconButton()}
                    {renderTitle()}
                    {renderSearchBox()}
                    {renderViewOnGithub()}
                </Toolbar>
            </AppBar>
        </div>
    );
}