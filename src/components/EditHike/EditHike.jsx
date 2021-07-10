import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// Material UI imports
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


// This function handles Editing and updating the information for a hike
function EditHike() {

    // Material UI
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();
    //End Material UI
    
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
        <div className={"list-container"}>
            <h2>Edit</h2>
            <form>
                <TextField onChange={(event) => handleEdit(event, 'name')} 
                    value={trail.name} 
                    type="text" placeholder="Edit Trail Name" />
                <br />

                <TextField onChange={(event) => handleEdit(event, 'location')} 
                    value={trail.location} 
                    type="text" placeholder="Edit Trail Location" />
                <br />

                <TextField onChange={(event) => handleEdit(event, 'description')} 
                    value={trail.description} 
                    type="text" multiline rows={4} placeholder="Edit Trail Description" />
                <br />
            </form>

              <div>
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
        </div>
    );
}

export default EditHike;