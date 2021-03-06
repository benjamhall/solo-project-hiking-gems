import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Components
import StarRating from '../StarRating/StarRating';
import MyRatings from '../MyRatings/MyRatings';
// Material-UI imports
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// This function displays the specific hike that was selected
function HikeDetails() {

    // Material UI
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();
    // End Material UI

    const dispatch = useDispatch();
    const history = useHistory();

    // const trail = useSelector((store) => store.trails);
    const details = useSelector((store) => store.details);

    const addFavorite = (details) => {
        console.log('Favorite button clicked', details)

        // Send a dispatch to add hike to the user's favorites
        dispatch({type: 'ADD_FAVORITE', payload: details})
        // Sends the user to the Favorites page
        history.push('/favorite');
    }
    
    // This function handles the edit button and sends the user to the edit page to edit the existing information of that particular hike
    const handleEdit = (event, details) => {
        console.log('trail', details)
        // Dispatches to the reducer 
        dispatch({ type: 'EDIT_HIKE', payload: details })
        // Sends the user to the edit page
        history.push('/edit');
    }

    // This function handles the back button and upon click sends the user back to the previous page they were at
    const handleBack = () => {
        console.log('Back button clicked"')
        //Routes the user back to the details list or the list page they were at
        history.goBack()
    }
// console.log('details id', details.id)
console.log('details', details)
    return (
        <Grid
            container
            className={classes.root}
            spacing={2}
            alignItems="center"
            direction="column"
        >
            <Grid item xs={12} key={details?.id}>
                <h2>Hike Details:</h2>
            </Grid>
                <div className={"hike-container"}>
                    <h3>{details.name}</h3>
                    <h4>{details.location}</h4>
                    <p>{details.description}</p>
                </div>
            <Box>
                <Button onClick={(event) => addFavorite(details.id)} variant="contained" color="primary" className={classes.button}>Favorite</Button>
                <Button onClick={(event) => handleEdit(event, details)} variant="contained" color="primary" className={classes.button}>Edit</Button>
                <Button onClick={handleBack} variant="contained" color="primary" className={classes.button}>Back</Button>
            </Box>
            <Grid item xs={12}>
                {/* Ratings */}
                <MyRatings detailsId={details.id} value={details.ratings} />
            </Grid>
        </Grid>
        
    );
}

export default HikeDetails;