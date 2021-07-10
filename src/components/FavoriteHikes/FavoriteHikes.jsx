import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI imports
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function FavoriteHikes() {

    // Material UI
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 12,
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
        <div>
            <div>
                <h2>Favorite Hikes:</h2>
                <section>
                    <Card className={classes.root} variant="outlined">
                    <ol>
                        {favorites?.map(favorite => {
                            return (
                                <li key={favorite.id}>
                                    <Typography>{favorite.name}</Typography>
                                    <p>{favorite.location}</p>
                                    <p>{favorite.description}</p></li>
                            )
                        })}
                    </ol>
                </Card>
                </section>
            </div>
            <Button onClick={handleBack} variant="outlined">Back</Button>
        </div>

    );
}

export default FavoriteHikes;