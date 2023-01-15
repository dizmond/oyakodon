import IconButton from '@material-ui/core/IconButton';
import PauseRounded from '@material-ui/icons/PauseRounded';

export default function PauseButton(props) {

    return (
        <IconButton onClick={() => { props.onClick() }} style={{ color: 'white' }} aria-label="upload picture" component="span">
            <PauseRounded fontSize="small" />
        </IconButton>
    );
};