import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';
import Navbar from "../components/Navbar";
import MoviesTable from "../components/MoviesTable";
import AddBtn from "../components/buttons/AddBtn";

const useStyles = makeStyles(() =>({
    root: {
        flexGrow: 1
    }
}));

function Movieapp(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <Navbar/>
            </Grid>
            <Grid item xs={12}>
                <MoviesTable />
            </Grid>
            <Grid item xs={12} align="center">
                <AddBtn />
            </Grid>
            </Grid>
        </div>
    );
}

export default Movieapp;