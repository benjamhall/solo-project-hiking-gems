import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function FavoriteHikes() {

    // Upon page load, this function dispatches "fetch trails" command to the generator function 
    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' })
    }, []);
   
    const 

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
                                    <Button onClick={event => hikeDetails(hike)} type="submit" variant="contained" color="secondary">Learn More</Button></li>
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