import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
            <Button variant="outlined" color="primary" size="large">
                Ingresa nueva pelicula
            </Button>
        </div>
    )
}

export default AddBtn;