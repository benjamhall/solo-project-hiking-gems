import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI components
import Button from '@material-ui/core/Button';

function FavoriteHikes() {
    const dispatch = useDispatch();
    const history = useHistory();

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
                    <ol>
                        {favorites.map(favorite => {
                            return (
                                <li key={favorite.id}>{favorite.name}: {favorite.location}
                                    <Button onClick={event => hikeDetails(hike)} type="submit" variant="contained" color="secondary">Details</Button></li>
                            )
                        })}
                    </ol>
                </section>
            </div>
            <Button onClick={handleBack}>Back</Button>
        </div>

    );
}

export default FavoriteHikes;