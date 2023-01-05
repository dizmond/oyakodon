import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'number', label: '#', minWidth: 0 },
    { id: 'art', label: 'TITLE', minWidth: 10 },
    { id: 'title', label: '', minWidth: 120 },
    {
        id: 'albumName',
        label: 'ALBUM',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'heart',
        label: '♡',
        minWidth: 10,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'time',
        label: '🕑',
        minWidth: 20,
        align: 'right',

    },
];

function createData(
    number,
    art,
    albumName,
    time
) {
    const heart = '♡';
    const title = 'title';
    return { number, art, title, albumName, heart, time };
}

const rows = [
    createData(1, 'IN', 1324171354, 328),
    createData(2, 'CN', 1403500365, 959),
    createData(3, 'IT', 60483973, 301),
    createData(4, 'US', 327167434, 983),
    createData(5, 'CA', 37602103, 998),
    createData(6, 'AU', 25475400, 769),
    createData(7, 'DE', 83019200, 357),
    createData(8, 'IE', 4857000, 702),
    createData(9, 'MX', 126577691, 197),
    createData(10, 'JP', 126317000, 377),
    createData(11, 'FR', 67022000, 640),
    createData(12, 'GB', 67545757, 242),
    createData(13, 'RU', 146793744, 170),
    createData(14, 'NG', 200962417, 923),
    createData(15, 'BR', 210147125, 851),
];

export default function SongCard() {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
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
