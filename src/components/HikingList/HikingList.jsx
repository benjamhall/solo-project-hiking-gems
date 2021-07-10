import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MyRatings from '../MyRatings/MyRatings';
import TrailRating from '../TrailRating/TrailRating';
// Material UI imports
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


// This function lists all of the hiking trails 
function HikingList() {
    
    // Material UI
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        control: {
            padding: theme.spacing(0),
            margin: 'auto',
        },
        absolute: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(3),
        },
    }));

    const classes = useStyles();
    // End Material UI

    const dispatch = useDispatch();
    const history = useHistory();

    // Get the Trails information from the reducer so we can render it
    const trails = useSelector(store => store.trails);

    // Upon page load, this function dispatches "fetch trails" command to the generator function 
    useEffect(() => {
        dispatch({ type: 'FETCH_TRAILS' })
        // dispatch({ type: 'FETCH_RATINGS' })

    }, []);

    // This function handles the Learn More button and brings the user to the Hike Details page for that specific trail
    const hikeDetails = (details) => {
        console.log('details are', details)

        // This dispatch request the hike details and stops first at the generator in the reducer
        dispatch({ type: 'HIKE_DETAILS', payload: details })

        // Sends the user to the details page
        history.push('/details')
    }

    return (
        <div className={"list-container"}>
        <Grid
            container
            className={classes.root}
            spacing={2}
            alignItems="center"
            direction="column"
        >
            <Grid item xs={12}>
                <h2>Hiking List:</h2>
            </Grid>
            <Grid item xs={12}>
            <Card>
                <ol>
                    {trails.map(hike => {
                        return (
                            <li key={hike.id} className={"hike-container"}>
                                {/* <Grid item xs={12}> */}
                                    {hike.name}: {hike.location}
                                {/* </Grid> */}
                                
                                {/* <Grid item xs={12}> */}
                                    <TrailRating value={hike.ratings} />
                                {/* </Grid> */}

                                {/* <Grid item xs={12}> */}
                                    <Button onClick={event => hikeDetails(hike)} type="submit" variant="contained" color="secondary">Learn More</Button>
                                {/* </Grid> */}
                            </li>

                        )
                    })}
                </ol>
            </Card>
            </Grid>
        </Grid>
        </div>
    );
}

export default HikingList;