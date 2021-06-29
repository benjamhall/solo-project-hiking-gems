import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function AddHike() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div>
            <h2>Add a Hike</h2>
        </div>
    );
}

export default AddHike;