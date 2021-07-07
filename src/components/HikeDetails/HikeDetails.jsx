import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material-UI imports
import Button from '@material-ui/core/Button';

function HikeDetails(trailId) {
    const dispatch = useDispatch();
    const history = useHistory();

    const trail = useSelector((store) => store.trails);
    const details = useSelector((store) => store.details);

    const addFavorite = (details) => {
        console.log('Favorite button clicked', details)

        // Send a dispatch to add hike to the user's favorites
        dispatch({type: 'ADD_FAVORITE', payload: details})
        // Sends the user to the Favorites page
        history.push('/favorite');
    }
    
    // This function handles the edit button and sends the user to the edit page to edit the existing information of that particular hike
    const handleEdit = (event, trail) => {
        console.log('trail', trail)
        // Dispatches to the reducer 
        dispatch({ type: 'EDIT_HIKE', payload: trail })
        // Sends the user to the edit page
        history.push('/edit');
    }

    // This function handles the back button and upon click sends the user back to the previous page they were at
    const handleBack = () => {
        console.log('Back button clicked"')
        //Routes the user back to the details list or the list page they were at
        history.goBack()
    }

console.log('details', details)
    return (
        <div>
            <div key={details?.id}>
                <h2>Hike Details:</h2>
                <p>{details.name}</p>
                <p>{details.location}</p>
                <p>{details.description}</p>
            </div>
        <Button onClick={(event) => addFavorite(details.id)}>Favorite</Button>
        <Button>Rate</Button>
        <Button onClick={(event) => handleEdit(event, trail)}>Edit</Button>
        <Button onClick={handleBack}>Back</Button>
        </div>
        
    );
}

export default HikeDetails;