import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import IconButton from '@material-ui/core/IconButton';

export default function FilledHeartButton(props) {

    return (
        <IconButton onClick={() => { props.onClick() }} style={{ color: 'white' }} aria-label="this song is liked" component="span">
            <FavoriteRoundedIcon fontSize="small" />
        </IconButton>
    );
};