import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', label: 'Nombre pelicula', minWidth: 170 },
    { id: 'genre', label: 'Genero', minWidth: 170 },
    { id: 'editicon', label: ' ', minWidth: 100 },
    { id: 'deleteicon', label: ' ', minWidth: 100 }
];

function createData(name, genre) {
    return { name, genre };
}

const rows = [
    createData('terminator', 'accion'),
    createData('scooby doo', 'comedia'),
    createData('el rey leon', 'animacion'),
    createData('titanic', 'romance'),
    createData('anabelle', 'terror'),
    createData('juego de asesinos', 'accion'),
    createData('toy story', 'animacion'),
    createData('ace ventura', 'comedia'),
    createData('ratatouille', 'animacion'),
    createData('el rito', 'terror'),
    createData('el conjuro', 'terro'),
    createData('rambo', 'accion'),
    createData('rapido y furioso', 'accion'),
    createData('el diario de noa', 'romance'),
    createData('crepusculo', 'romance')
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

function MoviesTable() {

    const classes = useStyles();
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    

    return (

        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead>

                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}    
                                >
                                    {column.label}

                                </TableCell>
                            ))}
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (

                                <TableRow hover role="checkbox" tabIndex={-1} key={row.label}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id}>
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