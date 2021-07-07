import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI imports
import Button from '@material-ui/core/Button';

// This function lists all of the hiking trails 
function HikingList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const trails = useSelector(store => store.trails);

    // Upon page load, this function dispatches "fetch trails" command to the generator function 
    useEffect(() => {
        dispatch({type: 'FETCH_TRAILS'})
    }, []);

    // This function handles the Learn More button and brings the user to the Hike Details page for that specific trail
    const hikeDetails = (details) => {
        console.log('details are', details)
        
        // This dispatch request the hike details and stops first at the generator in the reducer
        dispatch({type: 'HIKE_DETAILS', payload: details})

        // Sends the user to the details page
        history.push('/details')
    }

    return (
        <main>
        <div>
            <h2>Hiking List:</h2>
        </div>
            <section>
                <ol>
                {trails.map(hike => {
                return (
                    <li key={hike.id}>{hike.name}: {hike.location}
                    <Button onClick={event => hikeDetails(hike)} type="submit" variant="contained" color="secondary">Learn More</Button></li>
                )
            })}
            </ol>
            </section>
        </main>
    );
}

export default HikingList;