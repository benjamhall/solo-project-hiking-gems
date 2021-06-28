import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function HikingList() {

    // const store = useSelector((store) => store);
    // const [heading, setHeading] = useState('Functional Component');
    const dispatch = useDispatch();
    const history = useHistory();
    const trails = useSelector(store => store.trails);

    // Upon page load, this function dispatches "fetch trails" command to the generator function 
    useEffect(() => {
        dispatch({type: 'FETCH_TRAILS'})
    }, []);

    // This function handles the Learn More button and brings the user to the Hike Details page for that specific trail
    const handleDetail = () => {
        console.log('learn more button clicked')
        //history.pushState('/details')
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
                    <li key={hike.id}>{hike.name}{hike.location}
                    <Button onClick={handleDetail} type="submit" variant="contained" color="secondary">Learn More</Button></li>
                )
            })}
            </ol>
            </section>
        </main>
    );
}

export default HikingList;