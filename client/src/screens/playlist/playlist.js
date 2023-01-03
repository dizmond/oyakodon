import NumberList from '../../components/playlist/NumberList';

//PLACEHOLDER ARGUMENT FOR LIST OF tracks
const numz = ['song1', 'tune2', 'bop3', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default function Playlist() {
    return (
        <div>
            <NumberList vals={numz}></NumberList>
        </div>

    );
}