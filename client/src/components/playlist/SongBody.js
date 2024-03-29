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

    const handleHover = () => {
        setActive(!active);
    };
    const playButtonClick = () => {
        props.onClick();
        handleHover();
    };
    const heartButtonClick = () => {
        setLiked(!isLiked);
        handleHover();
    }


    const data = createData(props.num, 'art', props.title, props.album, <EmptyHeartButton />, props.time)

    return (
        < TableBody >
            <TableRow sx={{
                backgroundColor: "#222222",
                // backgroundColor: active ? "#333333" : "#222222"
                "&:hover": {
                    backgroundColor: "#333333 !important"
                }
            }} tabIndex={-1} key={data.code} onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()}
                onClick={(e) => {
                    if (e.detail === 2) {
                        props.onClick()
                    }
                }}
            >
                {
                    columns.map((column) => {
                        const value = data[column.id];
                        return (
                            <TableCell key={column.id} align={column.align} sx={{
                                borderBottom: "1px solid black",
                                color: "#cdcdcd",
                                minWidth: column.minWidth, maxWidth: column.maxWidth, width: column.width, height: 45
                            }}>

                                {active && column.id === "number" && !props.playStatus ? <PlayButton onClick={() => { playButtonClick() }} /> : ''}
                                {column.id === "art" || column.id === "time" || column.id === "albumName" ? value : ''}
                                {column.id === "number" && !active && !props.playStatus ? value : ''}
                                {props.playStatus && column.id === "number" ? <PauseButton onClick={() => { playButtonClick() }} /> : ''}
                                {column.id === "heart" && !isLiked ? <EmptyHeartButton onClick={() => { heartButtonClick() }} /> : ''}
                                {column.id === "heart" && isLiked ? <FilledHeartButton onClick={() => { heartButtonClick() }} /> : ''}
                                {column.id === "title" ?
                                    <>
                                        <div style={{ color: props.playStatus ? "green" : "white", fontSize: '1.2em' }}>{value}</div>
                                        <div >{props.artist}</div>
                                    </>
                                    : ''}
                            </TableCell>
                        );
                    })
                }
            </TableRow>
        </TableBody >
    );
}