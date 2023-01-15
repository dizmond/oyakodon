import SongHeader from '../../components/playlist/SongHeader';
import SongBody from '../../components/playlist/SongBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import React, { useState } from 'react';

const songNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const songTitles = ['song1', 'tune2', 'bop3', 'reallyreallyextremelylongtitle', 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const songArtist = ['SZA', 'Day Tripper', 'odol', 'Tame Impala', "Choo Jackson", 'Megan Thee Stallion']
const songAlbum = ['album1', 'album', 'album', 'reallyreallyextremelylongtitle', 'album', 'album1', 'reallyreallyextremelylongtitle', 'album', 'album', 'album', 'album1', 'album', 'album', 'album', 'album'];

export default function Playlist() {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);

    const [isPlaying, setPlaying] = useState(0);
    const switchFunction = (switchParameter, setParameter) => {
        switch (switchParameter) {
            case (1):
                setOne(setParameter);
                break;
            case (2):
                setTwo(setParameter);
                break;
            case (3):
                setThree(setParameter);
                break;
            case (4):
                setFour(setParameter);
                break;
            case (5):
                setFive(setParameter);
                break;
            case (6):
                setSix(setParameter);
                break;
        }
    }
    const toggleSong = (status, songNumber) => { //true means play, false means pause (or not playing)
        if ((isPlaying === 0 && status === true) || (isPlaying === songNumber && status === false)) { //this means no song is playing and you want to play a song that was selected OR the song playing is one we want to pause
            switchFunction(songNumber, status);
            if (isPlaying === 0) {
                setPlaying(songNumber);
                console.log('nothing was playing... now playing song');
            } else if (isPlaying === songNumber) {
                setPlaying(0);
                console.log('pausing song');
            }
        }
        else if (isPlaying !== 0 && isPlaying !== songNumber && status === true) { //some song is already playing, but now we want to play a different one, we have to first pause the one playing
            switchFunction(isPlaying, false);
            switchFunction(songNumber, true);
            setPlaying(songNumber);
            console.log('pausing previous song... playing current song');
        }
        else {
            console.log('Error');
        }
    }
    return (
        <div >
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        < SongHeader ></SongHeader >
                        <SongBody onClick={() => { toggleSong(!one, 1) }} playStatus={one} num={songNum[0]} title={songTitles[0]} artist={songArtist[0]} album={songAlbum[0]} time={'13:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[1]} title={songTitles[0]} artist={songArtist[1]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!three, 3) }} playStatus={three} num={songNum[2]} title={songTitles[0]} artist={songArtist[2]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!four, 4) }} playStatus={four} num={songNum[3]} title={songTitles[3]} artist={songArtist[3]} album={songAlbum[3]} time={'13:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!five, 5) }} playStatus={five} num={songNum[4]} title={songTitles[0]} artist={songArtist[4]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!six, 6) }} playStatus={six} num={songNum[5]} title={songTitles[0]} artist={songArtist[5]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        {/* <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[6]} title={songTitles[0]} album={songAlbum[6]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[7]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[8]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[9]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[10]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[11]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[12]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[13]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
                        <SongBody onClick={() => { toggleSong(!two, 2) }} playStatus={two} num={songNum[14]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody> */}
                    </Table>
                </TableContainer>
            </Paper>
            <p></p>
        </div >

    );
}