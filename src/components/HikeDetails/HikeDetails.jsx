import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function HikeDetails() {
    const dispatch = useDispatch();
    const history = useHistory();

    const trail = useSelector((store) => store.trails);
    const details = useSelector((store) => store.details);
    
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


    return (
        <div>
            <div key={trail?.id}>
                <h2>Hike Details:</h2>
                <p>{details.name}</p>
                <p>{details.location}</p>
                <p>{details.description}</p>
            </div>
        <Button>Favorite</Button>
        <Button>Rate</Button>
        <Button onClick={(event) => handleEdit(event, trail)}>Edit</Button>
        <Button onClick={handleBack}>Back</Button>
        </div>
        
    );
}

export default HikeDetails;