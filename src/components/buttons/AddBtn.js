import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

function AddBtn() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleOutlineIcon />}>
                Ingresa nueva pelicula
            </Button>
        </div>
    )
}

export default AddBtn;