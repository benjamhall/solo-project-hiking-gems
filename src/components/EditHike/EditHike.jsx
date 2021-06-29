import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function EditHike() {
    const dispatch = useDispatch();
    const history = useHistory();

    const store = useSelector((store) => store.editReducer);

    const handleEdit = (event) => {
        dispatch({ type: 'EDIT_ON_CHANGE', payload: { property: 'name', value: event.target.value } })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/trails/${name.id}`, name)
            .then(response => {
                dispatch({ type: 'CLEAR_EDIT' });
                history.push('/list')
            }).catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <h2>Review</h2>
            <form>
                <TextField onChange={(event) => handleEdit(event)} value={name.name} type="text" placeholder="New Name" />
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    );
}

export default EditHike;