import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function HikeDetails() {

    // const store = useSelector((store) => store);
    // const [heading, setHeading] = useState('Functional Component');

    return (
        <div>
            <div>
                <h2>Hike Details:</h2>
                <p>{trail.name}</p>
                <p>{trail.location}</p>
                <p>{trail.description}</p>
            </div>
        <Button>Favorite</Button>
        <Button>Edit</Button>
        <Button>Rate</Button>
        </div>
        
    );
}

export default HikeDetails;