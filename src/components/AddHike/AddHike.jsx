import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI imports
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { spacing } from '@material-ui/system';


function AddHike() {
    // Material UI
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
        textField: {
            width: 300,
        },
    }));

    const classes = useStyles();
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
        dispatch({ type: 'POST_HIKE', payload: { name: name, location: location, description: description } })

        // Sends the user to the Review Page
        history.push('/review')
    }

    return (
        <div className={"list-container"}>
            <h2>Add a Hike</h2>
            <p>Fill Out This Form to Submit a New Hiking Trail:</p>
            <form>
                    <TextField value={name}
                        onChange={handleNameChange}
                    id="outlined-name" label="Hiking Trail Name" variant="outlined" className={classes.textField} />
                <br />
                    <TextField value={location}
                        onChange={handleLocationChange}
                    id="outlined-location" label="Location" variant="outlined" className={classes.textField} />
                <br />
                    <TextField value={description}
                        onChange={handleDescriptionChange}
                    id="outlined-basic" label="Description of Trail" multiline rows={8} variant="outlined" className={classes.textField} />
                <br />
            </form>

            <div>
                <Box>
                    <Button onClick={handleCancel} type="submit" variant="contained" color="primary" className={classes.button} >Cancel</Button>
                    <Button onClick={postHike} type="submit" variant="contained" color="primary" className={classes.button} >Save</Button>
                </Box>
            </div>
        </div>
    );
}

export default AddHike;