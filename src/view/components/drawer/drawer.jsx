import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

export default function MenuDrawer(props) {
    const renderMenuItem = item => {
        return (
            <Link to={item.path}key={item.text}>
                <ListItem button >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
            </Link>
        )
    }

    const renderMenuItems = () => {
        const { menuItems } = props;

        return (
            <List>
                {menuItems.map(item => renderMenuItem(item))}
            </List>
        )
    }

    const classes = useStyles();

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={props.toggleDrawer(side, false)}
            onKeyDown={props.toggleDrawer(side, false)}
        >
            <Divider />
            {renderMenuItems()}
        </div>
    );

    return (
        <div>
            <Drawer open={props.state.left} onClose={props.toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}