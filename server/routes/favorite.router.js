const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
});


// Sends a Post request to the database and adds the new data
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);

    // Returning "id" will give us back the id of the created hike
    const query = `
    INSERT INTO "hike" ("name", "location", "description")
    VALUES ($1, $2, $3)
    RETURNING "id";`
    
    // Save values to add
    const values = [req.user.id, req.body.hikeId];
    // This query makes the new hike entry
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);

        // Catch for the query
        }).catch(err => {
            console.log('Error in Post Favorite', err);
            res.sendStatus(500)
        })
}); // End of Post Route

module.exports = router;