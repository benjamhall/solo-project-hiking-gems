import React from 'react';

// Material UI imports
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

// This function displays the rating for each trail, it is a read-only version
function TrailRating({value}) {

    // Material UI
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            border: 2,
            paddingRight: 8,
            marginBottom: 10,
        },
    });

    const classes = useStyles();
    // End Material UI


    return (
        <div className={"rating-container"} >
            <Box component="fieldset" mb={0} borderColor="transparent">
                <Typography component="legend"> My Rating:</Typography>
                <Rating 
                name="read-only" 
                value={value} readOnly  />
            </Box>
        </div>
    )
}

export default TrailRating;