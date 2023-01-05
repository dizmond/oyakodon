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
    { id: 'title', label: '', minWidth: 100 },
    {
        id: 'albumName',
        label: 'ALBUM',
        minWidth: 120,
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
    title,
    albumName,
    time
) {
    const heart = '♡';
    return { number, art, title, albumName, heart, time };
}

export default function SongCard(props) {
    const rows = [];
    const songTitleList = props.title;

    for (let i = 0; i < songTitleList.length; i++) {
        let songNum = i + 1;
        let titleName = songTitleList[i];
        let album = 'albumName' + songNum;
        let timeNum = '3:28';
        rows[i] = createData(songNum, 'art', titleName, album, timeNum);
    };

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
                                    style={{ minWidth: column.minWidth, borderBottom: "2px solid black", backgroundColor: "#111111", color: "#e1e1e1" }}
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
                                                <TableCell key={column.id} align={column.align} sx={{ borderBottom: "1px solid black", backgroundColor: "#222222", color: "#e1e1e1" }}>
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

        </Paper >
    );
}
