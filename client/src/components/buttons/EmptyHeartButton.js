import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react';

export default function EmptyHeartButton() {
    return (
        <>

            <IconButton style={{ color: 'white' }} aria-label="click to like this song" component="span">
                <FavoriteBorderRoundedIcon fontSize="small" />
            </IconButton>
        </>
    );
};