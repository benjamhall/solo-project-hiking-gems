import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function AddHike() {
    const dispatch = useDispatch();
    const history = useHistory();

    let [name, setName] = useState('')
    let [location, setLocation] = useState('')
    let [description, setDescription] = useState('')

    // This function handles the change of the name input
    const handleNameChange = (event) => {
        console.log('name changed')

        // Sets the local state of setName equal to the value of the input
        setName(event.target.value)
    }

    

    return (
        <div>
            <h2>Add a Hike</h2>
            <p>Please Fill Out This Form to Submit a New Hiking Trail:</p>
            <form>
                <TextField value={name}
                onChange ={handleNameChange}
                id="outlined-name" label="Hiking Trail Name" variant="outlined" />

                <TextField value={location}
                onChange={handleLocationChange}
                id="outlined-location" label="Location" variant="outlined" />

                <TextField value={description}
                onChange={handleDescriptionChange}
                id="outlined-basic" label="Description of Trail" variant="outlined" />

            </form>
            <Button onClick={handleCancel} type="submit" variant="contained" color="secondary"></Button>
            <Button onClick={handleSave} type="submit" variant="contained" color="secondary"></Button>
        </div>
    );
}

export default AddHike;