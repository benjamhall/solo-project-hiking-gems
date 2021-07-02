import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

function HikeDetails() {

    const details = useSelector((store) => store.details);
    // const [heading, setHeading] = useState('Functional Component');

    return (
        <div>
            <div>
                <h2>Hike Details:</h2>
                <p>{details.name}</p>
                <p>{details.location}</p>
                <p>{details.description}</p>
            </div>
        <Button>Favorite</Button>
        <Button>Edit</Button>
        <Button>Rate</Button>
        </div>
        
    );
}

export default HikeDetails;