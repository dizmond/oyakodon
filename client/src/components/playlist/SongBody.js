import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'number', label: '#', maxWidth: 0 },
    { id: 'art', label: 'TITLE', maxWidth: 0 },
    { id: 'title', align: 'left', label: '', minWidth: 140 },
    {
        id: 'albumName',
        label: 'ALBUM',
        minWidth: 50,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'heart',
        label: '♥',
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
    const heart = '♡'; //♥♡
    return { number, art, title, albumName, heart, time };
}

export default function SongBody(props) {
    const [active, setActive] = useState(false);
    const handleHover = () => {
        setActive(!active);
    };

    const data = createData(props.num, 'art', props.title, props.album, props.time)

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    {/* <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, borderBottom: "2px solid black", backgroundColor: "#111111", color: "#e1e1e1" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        <TableRow sx={{
                            backgroundColor: "#222222", "&:hover": {
                                backgroundColor: "#333333 !important"
                            }
                        }} tabIndex={-1} key={data.code}
                            onMouseEnter={() =>
                                // rows[row.number - 1] = createData('blah', 'art', 'blah', 'blah', '3:28')
                                handleHover()
                            }
                            onMouseLeave={() =>
                                // console.log(rows[row.number - 1])
                                handleHover()
                            }
                        >
                            {
                                columns.map((column) => {
                                    const value = data[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align} sx={{
                                            borderBottom: "1px solid black", color: active ? "green" : "#e1e1e1",
                                            minWidth: column.minWidth, maxWidth: column.maxWidth
                                        }}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                        </TableCell>
                                    );
                                })
                            }
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper >
    );
}