import { TrainOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function HikingList() {

    // const store = useSelector((store) => store);
    // const [heading, setHeading] = useState('Functional Component');

    return (
        <main>
        <div>
            <h2>Hiking List:</h2>
        </div>
            <section>
                <ol>
                {hikingList.map(trail => {
                return (
                    <li key={hike.id}>{hike.name}{hike.location}{hike.description}</li>
                )
            })}
            </ol>
            </section>
        </main>
    );
}

export default HikingList;