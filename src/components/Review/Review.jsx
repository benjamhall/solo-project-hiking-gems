import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


function Review() {

    // Material UI
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        control: {
            padding: theme.spacing(2),
            margin: 'auto',
        },
        button: {
            margin: theme.spacing(1),
        },

    }));

    const classes = useStyles();
    // End Material UI

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

            if (result.value) {
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
        dispatch({ type: 'EDIT_HIKE', payload: trail })
        // Sends the user to the edit page
        history.push('/edit');
    }


    return (
        <Grid
            container
            className={classes.root}
            spacing={2}
            alignItems="center"
            direction="column"
        >
            <h2>Review and Edit Page:</h2>
            <form>
                <div>
                    {trail?.map(trail => {
                        return (
                            <div key={trail?.id} className={"hike-container"}>
                                <h3>{trail?.name}</h3>
                                <h4>{trail?.location}</h4>
                                <p>{trail?.description}</p>
                                <div className={"center-container"}>
                                    <Button onClick={(event) => handleEdit(event, trail)} type="submit" variant="contained" color="primary" className={classes.button} >Edit</Button>
                                    <Button onClick={() => handleDelete(trail)} type="submit" variant="contained" color="primary" className={classes.button} >Delete</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </form>
        </Grid>
    );
}

export default Review;