import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
 
    const trail = useSelector((store) => store.trails);

    useEffect(() => {
        dispatch({ type: 'FETCH_TRAILS' })
    }, []);

    const handleDelete = (trail) => {
        console.log('delete button clicked')
        Swal.fire({
            title: "Are you Sure?",
            text: "Once you delete this hike it will be gone forever",
            icon: "warning",
            confirmButtonText: 'Yes!',
            showCancelButton: true,
        }).then((result) => {
            dispatch({ type: 'REMOVE_HIKE', payload: trail })
            if(result.value) {
                Swal.fire({
                    title: "hike deleted",
                    icon: "success",
                })
                
            }
        })
        
    }

    const handleEdit = (event, trail) => {
    
        console.log('trail', trail)
        dispatch({type: 'EDIT_HIKE', payload: trail})
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
                        <button onClick={(event) => handleEdit(event, trail)}>Edit</button>
                        <button onClick={() => handleDelete(trail)}>Delete</button>
                    </div>
                )})}
            </div>
            </form>
        </div>
    );
}

export default Review;