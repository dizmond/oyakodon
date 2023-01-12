import IconButton from '@material-ui/core/IconButton';
import PauseRounded from '@material-ui/icons/PauseRounded';

export default function PauseButton() {

    return (
        <IconButton style={{ color: 'white' }} aria-label="upload picture" component="span">
            <PauseRounded fontSize="small" />
        </IconButton>
    );
};