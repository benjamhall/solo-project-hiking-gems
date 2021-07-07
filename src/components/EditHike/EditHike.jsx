import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// Material UI imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


// This function handles Editing and updating the information for a hike
function EditHike() {
    const dispatch = useDispatch();
    const history = useHistory();

    const trail = useSelector((store) => store.edit);

    console.log('trail', trail)

    // This function handles the Edit function 
    const handleEdit = (event, newTrailInfo) => {
        // Dispatches the Edit with the new information to the 
        dispatch({ type: 'EDIT_ON_CHANGE', payload: { property: newTrailInfo, value: event.target.value } })
    }

    // This function handles the Submit button 
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/trail/${trail.id}`, trail)
            .then(response => {
                dispatch({ type: 'CLEAR_EDIT' });
                history.push('/review')
            }).catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <h2>Edit</h2>
            <form>
                <TextField onChange={(event) => handleEdit(event, 'name')} value={trail.name} type="text" placeholder="Edit Trail Name" />
                <TextField onChange={(event) => handleEdit(event, 'location')} value={trail.location} type="text" placeholder="Edit Trail Location" />
                <TextField onChange={(event) => handleEdit(event, 'description')} value={trail.description} type="text" placeholder="Edit Trail Description" />
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    );
}

export default EditHike;