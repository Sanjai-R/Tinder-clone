import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons_repeat swipeButtons_common'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons_left swipeButtons_common'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons_star swipeButtons_common'>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons_right swipeButtons_common'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons_lightning swipeButtons_common'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons