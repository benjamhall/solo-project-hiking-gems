// hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material-UI components
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function MyRatings ({detailsId, rating}) {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log('star clicked')
        dispatch({
            type: 'ADD_NEW_RATING', payload: {
                newRating: Number(event.target.value),
                detailsId: detailsId,
            }
        })
    }

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rate this Hike:</Typography>
                <Rating
                    name="simple-controlled"
                    size="large"
                    // value={rating}
                    onChange={() => handleChange(event)}
                />
            </Box>
        </div>
    )
}

export default MyRatings;