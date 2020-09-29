import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0.5)
        }
    },
    spaceButton: {
        marginRight: theme.spacing(2)
    }
}))

function AddBtn() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleOutlineIcon />} onClick={handleClickOpen}>
                Ingresa nueva pelicula
            </Button>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                        <div className={classes.root}>
                            <TextField
                                id="name"
                                label="Ingresar pelicula"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                id="genre"
                                label="Genero"
                                variant="outlined"
                                fullWidth
                            />

                            <div align="center">
                                <Button onClick={handleClose} className={classes.spaceButton} color="primary" variant="contained" startIcon={<CancelOutlinedIcon />}>
                                    Cancelar
                                </Button>
                                <Button onClick={handleClose} variant="contained" color="secondary" startIcon={<SaveIcon />}>
                                    Guardar
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default AddBtn;