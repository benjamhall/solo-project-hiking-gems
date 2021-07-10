import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI imports
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


function AddHike() {
    // Material UI
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    //End Material UI

    const dispatch = useDispatch();
    const history = useHistory();

    let [name, setName] = useState('')
    let [location, setLocation] = useState('')
    let [description, setDescription] = useState('')

    // This function handles the change of the name input
    const handleNameChange = (event) => {
        console.log('name event changed')

        // Sets the local state of setName equal to the value of the input
        setName(event.target.value)
    }

    // This function handles the change of the location input
    const handleLocationChange = (event) => {
        console.log('location event changed')

        // Sets the local state of setLocation equal to the value of the input
        setLocation(event.target.value)
    }

    // This function handles the change of the description input
    const handleDescriptionChange = (event) => {
        console.log('description event changed')

        // Sets the local state of setDescription equal to the value of the input
        setDescription(event.target.value)
    }

    // This function handles the cancel button which upon click will bring the user back to the home page
    const handleCancel = () => {
        console.log('cancel button clicked')

        //Routes the user back to the home page
        history.goBack()
    }

    // This function handles the save button and sends the information in the inputs to the reducer
    const postHike = () => {
        console.log('save button clicked')

        // Dispatches the information from the inputs to the reducer
        dispatch({type: 'POST_HIKE', payload: {name: name, location: location, description: description}})

        // Sends the user to the Review Page
        history.push('/review')
    }

    return (
        <div className={"list-container"}>
            <h2>Add a Hike</h2>
            <p>Please Fill Out This Form to Submit a New Hiking Trail:</p>
            <form>
                <section>
                <TextField value={name}
                onChange ={handleNameChange}
                id="outlined-name" label="Hiking Trail Name" variant="outlined" />
                </section>
            <br />
                <TextField value={location}
                onChange={handleLocationChange}
                id="outlined-location" label="Location" variant="outlined" />
            <br />
                <TextField value={description}
                onChange={handleDescriptionChange}
                id="outlined-basic" label="Description of Trail" multiline rows={4} variant="outlined" />
                {/* <TextareaAutosize value={description}
                onChange={handleDescriptionChange}
                aria-label="minimum height" minRows={3} placeholder="Description of Trail" /> */}

            </form>

            <div className={"add-hike-button-container"}>
                <Button onClick={handleCancel} type="submit" variant="contained" color="secondary">Cancel</Button>
                <Button onClick={postHike} type="submit" variant="contained" color="secondary">Save</Button>
            </div>
        </div>
    );
}

export default AddHike;