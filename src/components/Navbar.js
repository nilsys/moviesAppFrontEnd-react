import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core/';
//import MenuIcon from '@material-ui/icons/Menu';
import MenuGenre from "./MenuGenre";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Navbar(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="absolute">
            <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuGenre />
            </IconButton>
            <Typography variant="h6" color="inherit">
                MOVIESAPP
            </Typography>
            </Toolbar>
            </AppBar>
        </div>
    );

}

export default Navbar;