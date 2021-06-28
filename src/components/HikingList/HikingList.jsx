import { TrainOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

function HikingList() {

    // const store = useSelector((store) => store);
    // const [heading, setHeading] = useState('Functional Component');

    useEffect(() => {
        dispatchEvent({type: 'FETCH_TRAILS'})
    }, []);

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
                {hikingList.map(trail => {
                return (
                    <li key={hike.id}>{hike.name}{hike.location}{hike.description}
                    <Button onClick={handleDetail} type="submit" variant="contained" color="secondary">Learn More</Button></li>
                )
            })}
            </ol>
            </section>
        </main>
    );
}

export default HikingList;