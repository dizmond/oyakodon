import React, { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PlayButton from '../buttons/PlayButton';
import PauseButton from '../buttons/PauseButton';

const columns = [
    { id: 'number', label: '#', width: 40, align: 'center', maxWidth: 40 },
    { id: 'art', label: 'TITLE', width: 0 },
    { id: 'title', align: 'left', label: '', width: 280 },
    {
        id: 'albumName',
        label: 'ALBUM',
        width: 180,
        align: 'left',

    },
    {
        id: 'heart',
        label: '♥',
        width: 10,
        align: 'right',

    },
    {
        id: 'time',
        label: '🕑',
        width: 50,
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
    const [playing, setPlaying] = useState(false);
    const handleHover = () => {
        setActive(!active);
    };
    const togglePlay = () => {
        setPlaying(!playing);
    };

    const data = createData(props.num, 'art', props.title, props.album, props.time)

    return (
        < TableBody >
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
                onClick={() => togglePlay()}
            >
                {
                    columns.map((column) => {
                        const value = data[column.id];
                        return (
                            <TableCell key={column.id} align={column.align} sx={{
                                borderBottom: "1px solid black", color: "#e1e1e1",
                                minWidth: column.minWidth, maxWidth: column.maxWidth, width: column.width, height: 45
                            }}>
                                {active && column.id === "number"
                                    ? <PlayButton />
                                    : value}
                            </TableCell>
                        );
                    })
                }
            </TableRow>
        </TableBody >
    );
}