import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'number', label: '#', align: 'center', maxWidth: 0 },
    { id: 'art', label: 'TITLE', maxWidth: 100 },
    { id: 'title', align: 'left', label: '', minWidth: 160 },
    {
        id: 'albumName',
        label: 'ALBUM',
        minWidth: 110,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'heart',
        label: '♥',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'time',
        label: '🕑',
        minWidth: 20,
        align: 'right',

    },
];


export default function SongHeader() {

    return (
        <TableHead>
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
        </TableHead>

    );
}