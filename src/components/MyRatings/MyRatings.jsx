// hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material-UI components
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// This function handles the My Ratings for each individual hike

function MyRatings ({detailsId, value}) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // Upon clicking a star to rate a particular hike, the star rating is sent to the add Rating saga
    const handleChange = (event) => {
        console.log('star clicked')
        dispatch({
            type: 'ADD_NEW_RATING', payload: {
                newRating: Number(event.target.value),
                detailsId: detailsId,
            }
        })

        // After dispatching the rating then send the user to the hiking list
        history.push('/list')
    }

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <div >
                <h3>Rate this Hike:</h3>
                </div>
                <Rating
                    name="simple-controlled"
                    size="large"
                    value={value}
                    onChange={() => handleChange(event)}
                />
            
            </Box>
            
        </div>
    )
}

export default MyRatings;