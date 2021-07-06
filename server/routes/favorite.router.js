const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
});


// Sends a Post request to the database and adds the new data to the user's list of favorites
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('got to post request', req.body)

    // Insert into the rating table 
    const query =  `INSERT INTO "rating" ("user_id", "hike_id", "favorite")
                    VALUES ($1, $2, TRUE)
                    ON CONFLICT ("user_id", "hike_id")
                    DO UPDATE SET "favorite" = TRUE;`;
    // Save values to add
    const values = [req.user.id, req.body.hikeId];
    // This query makes the new hike entry
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);

        // Catch for the query
        }).catch(err => {
            console.log('Error in Posting Favorite to the database', err);
            res.sendStatus(500)
        })
}); // End of Post Route

module.exports = router;