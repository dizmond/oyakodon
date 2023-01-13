import React, { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PlayButton from '../buttons/PlayButton';
import PauseButton from '../buttons/PauseButton';
import EmptyHeartButton from '../buttons/EmptyHeartButton';
import FilledHeartButton from '../buttons/FilledHeartButton';

const columns = [
    { id: 'number', label: '#', width: 40, align: 'center', maxWidth: 40 },
    { id: 'art', label: 'TITLE', width: 0 },
    { id: 'title', align: 'left', label: '', width: 250 },
    {
        id: 'albumName',
        label: 'ALBUM',
        width: 160,
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
    heart,
    time
) {

    return { number, art, title, albumName, heart, time };
}

export default function SongBody(props) {
    const [active, setActive] = useState(false);
    const [isLiked, setLiked] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const handleHover = () => {
        setActive(!active);
    };
    const likeSong = () => {
        setLiked(true);
    };
    const playSong = () => {
        setPlaying(!isPlaying);
    }
    // const togglePlay = () => {
    //     setPlaying(!playing);
    // };

    const data = createData(props.num, 'art', props.title, props.album, <EmptyHeartButton />, props.time)

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
                onClick={() => { playSong() }}
            >
                {
                    columns.map((column) => {
                        const value = data[column.id];
                        return (
                            <TableCell key={column.id} align={column.align} sx={{
                                borderBottom: "1px solid black", color: "#e1e1e1",
                                minWidth: column.minWidth, maxWidth: column.maxWidth, width: column.width, height: 45
                            }}>
                                {column.id != "number" ? value : ''}
                                {column.id === "number" && !active && !isPlaying ? value : ''}
                                {isPlaying && column.id === "number" ? <PauseButton /> : ''}
                                {active && column.id === "number" && !isPlaying ? <PlayButton /> : ''}

                                {/* {column.id === "heart" && isLiked ? <FilledHeartButton /> : ''} */}

                            </TableCell>
                        );
                    })
                }
            </TableRow>
        </TableBody >
    );
}