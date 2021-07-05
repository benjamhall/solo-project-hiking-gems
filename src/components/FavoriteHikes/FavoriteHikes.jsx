import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function FavoriteHikes() {
   

    // This function handles the back button and upon click sends the user back to the previous page they were at
    const handleBack = () => {
        console.log('Back button clicked"')
        //Routes the user back to the details list or the list page they were at
        history.goBack()
    }

    return (
        <div>
            <div>
                <h2>Favorite Hikes:</h2>

            </div>
            <Button onClick={handleBack}>Back</Button>
        </div>

    );
}

export default FavoriteHikes;