import NumberList from '../../components/playlist/NumberList';
import SongCard from '../../components/playlist/SongCard';
//PLACEHOLDER ARGUMENT FOR LIST OF tracks
const numz = ['song1', 'tune2', 'bop3', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default function Playlist() {
    return (
        <div>
            <SongCard></SongCard>
            <p></p>
            {/* <NumberList vals={numz}></NumberList> */}
        </div>

    );
}