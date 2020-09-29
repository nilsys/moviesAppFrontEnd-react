import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    spaceButton: {
        marginRight: theme.spacing(2)
    }
}))

function DeleteBtn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <Button variant="contained" color="secondary" size="small" startIcon={<DeleteOutlinedIcon />} onClick={handleClickOpen}>
                Eliminar
            </Button>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{"¿Seguro que quieres eliminar esta pelicula?"}</DialogTitle>
                    <DialogContent>
                        <div align="center">
                            <Button onClick={handleClose} className={classes.spaceButton} color="default" variant="contained">
                                Si
                            </Button>
                            <Button onClick={handleClose} className={classes.spaceButton} color="default" variant="contained">
                                No
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )

}

export default DeleteBtn;