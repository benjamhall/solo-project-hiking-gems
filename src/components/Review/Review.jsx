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
            
            if(result.value) {
                Swal.fire({
                    title: "hike deleted",
                    icon: "success",
                })
                dispatch({ type: 'REMOVE_HIKE', payload: trail })
            } else {
                Swal.fire("Hike not deleted")
            }
        })
    }

    // This function handles the edit button
    const handleEdit = (event, trail) => {
        console.log('trail', trail)
        
        // Dispatches the Edit Hike type to the edit reducer sending the information of trail in the payload
        dispatch({type: 'EDIT_HIKE', payload: trail})
        // Sends the user to the edit page
        history.push('/edit');
    }

 
    return (
        
        <div>
            <h2>Review and Edit Page:</h2>
            <form>
            <div>
                {trail?.map(trail => {
                    return(
                    <div key={trail?.id}>
                        {trail?.name}
                        {trail?.location}
                        {trail?.description}
                        <Button onClick={(event) => handleEdit(event, trail)}>Edit</Button>
                        <Button onClick={() => handleDelete(trail)}>Delete</Button>
                    </div>
                )})}
            </div>
            </form>
        </div>
    );
}

export default Review;