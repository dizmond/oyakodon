import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import IconButton from '@material-ui/core/IconButton';

export default function EmptyHeartButton(props) {
    return (
        <>

            <IconButton onClick={() => { props.onClick() }} style={{ color: 'white' }} aria-label="click to like this song" component="span">
                <FavoriteBorderRoundedIcon fontSize="small" />
            </IconButton>
        </>
    );
};