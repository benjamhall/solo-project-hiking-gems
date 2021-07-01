import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


function EditHike() {
    const dispatch = useDispatch();
    const history = useHistory();

    const trail = useSelector((store) => store.edit?.trailId);

    console.log('trail', trail)

    const handleEdit = (event) => {
        dispatch({ type: 'EDIT_ON_CHANGE', payload: { property: 'name', value: event.target.value } })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/trail/${trail.id}`, trail)
            .then(response => {
                dispatch({ type: 'CLEAR_EDIT' });
                history.push('/list')
            }).catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <h2>Edit</h2>
            <form>
                <TextField onChange={(event) => handleEdit(event)} value={trail} type="text" placeholder="New Trail Name" />
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    );
}

export default EditHike;