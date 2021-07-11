import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI imports
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function FavoriteHikes() {

    // Material UI
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            border: 2,
            paddingRight: 8,
            marginBottom: 10,
            
        },

        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();
    // End Material UI

    const dispatch = useDispatch();
    const history = useHistory();

    const id = useSelector((store) => store.user.id);
    console.log('user id', id)

    const favorites = useSelector((store) => store.favorites);

    // Upon page load, this function dispatches "fetch trails" command to the generator function 
    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' })
    }, []);


    // This function handles the back button and upon click sends the user back to the previous page they were at
    const handleBack = () => {
        console.log('Back button clicked"')
        //Routes the user back to the details list or the list page they were at
        history.goBack()
    }

    return (
        <Grid
            container
            className={classes.root}
            spacing={2}
            alignItems="center"
            direction="column"
        >
    
                <Grid item xs={12}>
                    <h2>Favorite Hikes:</h2>
                </Grid>
            <div>
                <section>
                    <ol>
                        {favorites?.map(favorite => {
                            return (
                                    <li key={favorite.id} className={"hike-container"}>
                                    <h3>{favorite.name}</h3>
                                    <h4>{favorite.location}</h4>
                                    <p>{favorite.description}</p></li>
                            )
                        })}
                    </ol>
                </section>
            </div>
            <Box textAlign="center">
                <Button onClick={handleBack} variant="contained" color="primary" >Back</Button>
            </Box>
        </Grid>

    );
}

export default FavoriteHikes;