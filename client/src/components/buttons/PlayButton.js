import IconButton from '@material-ui/core/IconButton';
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded';


export default function PlayButton() {

  return (
    <IconButton onClick={() => { }} style={{ color: 'white' }} aria-label="upload picture" component="span">
      <PlayArrowRounded fontSize="small" />
    </IconButton>
  );
};