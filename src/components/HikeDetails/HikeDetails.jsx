import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function HikeDetails() {
    const dispatch = useDispatch();
    const history = useHistory();

    const trail = useSelector((store) => store.trails);
    const details = useSelector((store) => store.details);
    
    const handleEdit = (event, trail) => {
        console.log('trail', trail)
        
        // Dispatches to the reducer 
        dispatch({ type: 'EDIT_HIKE', payload: trail })
        history.push('/edit');
    }

    const handleBack = () => {
        console.log('Back button clicked"')
    }

    return (
        <div>
            <div>
                <h2>Hike Details:</h2>
                <p>{details.name}</p>
                <p>{details.location}</p>
                <p>{details.description}</p>
            </div>
        <Button>Favorite</Button>
        <Button onClick={(event) => handleEdit(event, trail)}>Edit</Button>
        <Button>Rate</Button>
        <Button onClick={handleBack}>Back to the List</Button>
        </div>
        
    );
}

export default HikeDetails;