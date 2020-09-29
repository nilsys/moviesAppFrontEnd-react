import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditBtn from "./buttons/EditBtn";
import DeleteBtn from "./buttons/DeleteBtn";

const columns = [
    { id: 'name', label: 'Nombre pelicula', minWidth: 170 },
    { id: 'genre', label: 'Genero', minWidth: 170 },
    { id: 'editbtn', label: ' ', minWidth: 100 },
    { id: 'deletebtn', label: ' ', minWidth: 100 }
];

function createData(name, genre, editbtn, deletebtn) {
    return { name, genre, editbtn, deletebtn };
}

const rows = [
    createData('terminator', 'accion', <EditBtn />, <DeleteBtn />),
    createData('scooby doo', 'comedia', <EditBtn />, <DeleteBtn />),
    createData('el rey leon', 'animacion', <EditBtn />, <DeleteBtn />),
    createData('titanic', 'romance', <EditBtn />, <DeleteBtn />),
    createData('anabelle', 'terror', <EditBtn />, <DeleteBtn />),
    createData('juego de asesinos', 'accion', <EditBtn />, <DeleteBtn />),
    createData('toy story', 'animacion', <EditBtn />, <DeleteBtn />),
    createData('ace ventura', 'comedia', <EditBtn />, <DeleteBtn />),
    createData('ratatouille', 'animacion', <EditBtn />, <DeleteBtn />),
    createData('el rito', 'terror', <EditBtn />, <DeleteBtn />),
    createData('el conjuro', 'terror', <EditBtn />, <DeleteBtn />),
    createData('rambo', 'accion', <EditBtn />, <DeleteBtn />),
    createData('rapido y furioso', 'accion', <EditBtn />, <DeleteBtn />),
    createData('el diario de noa', 'romance', <EditBtn />, <DeleteBtn />),
    createData('crepusculo', 'romance', <EditBtn />, <DeleteBtn />)
];

const useStyles = makeStyles({
    root: {
        width: '100%',
        Spacing: 8
    },
    container: {
        maxHeight: 440,
    },
});

function MoviesTable() {

    const classes = useStyles();

    return (

        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead>

                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    align="center"
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}    
                                >
                                    {column.label}

                                </TableCell>
                            ))}
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {rows.map((row) => {
                            return (

                                <TableRow hover role="checkbox" tabIndex={-1} key={row.label}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align="center">
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>

                            );
                        })}

                    </TableBody>

                </Table>
            </TableContainer>
        </Paper>

    );

}

export default MoviesTable;