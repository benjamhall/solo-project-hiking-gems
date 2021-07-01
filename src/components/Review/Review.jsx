import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
 
    const trail = useSelector((store) => store.trails);

    useEffect(() => {
        dispatch({ type: 'FETCH_TRAILS' })
    }, []);

    const handleDelete = (event) => {
        console.log('Hike to be deleted', event)
        dispatch({type: 'REMOVE_HIKE',
                payload: event})
    }

    const handleEdit = (event, trail) => {
        console.log('Hike to be updated is', event.target.value);
        console.log('trail', trail)
        dispatch({type: 'EDIT_HIKE', payload: event.target.value})
        history.push('/edit');
    }

    //console.log('trail', trail?.)
    return (
        
        <div>
            <h2>Review</h2>
            <form>
            <div>
                {trail?.map(trail => {
                    return(
                    <div key={trail?.id}>
                        {trail?.name}
                        {trail?.location}
                        {trail?.description}
                        <button value={trail?.id} onClick={(event, trail) => handleEdit(event, trail)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )})}
            </div>
            </form>
        </div>
    );
}

export default Review;