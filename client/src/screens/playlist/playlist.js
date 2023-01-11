import SongCard from '../../components/playlist/SongCard';
//PLACEHOLDER ARGUMENT FOR LIST OF tracks
import SongHeader from '../../components/playlist/SongHeader';
import SongBody from '../../components/playlist/SongBody';

const songNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const songTitles = ['song1', 'tune2', 'bop3', 'reallyreallyextremelylongtitle', 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const songAlbum = ['album1', 'album', 'album', 'album', 'album', 'album1', 'album', 'album', 'album', 'album', 'album1', 'album', 'album', 'album', 'album'];

export default function Playlist() {
    return (
        <div >
            <SongCard title={songTitles}></SongCard>
            <p></p>
            < SongHeader ></SongHeader >
            <SongBody num={songNum[0]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[1]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[2]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[3]} title={songTitles[3]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[4]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[5]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[6]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[7]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[8]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[9]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[10]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[11]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[12]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[13]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            <SongBody num={songNum[14]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody>
            {/* <SongBody num={songNum[15]} title={songTitles[0]} album={songAlbum[0]} time={'3:28'}></SongBody> */}

            <p></p>
        </div >

    );
}