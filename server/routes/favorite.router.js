const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// Sends a Get request to the database for all of the favorites
router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log('in favorite router get', req.params.id)

    // Select from the database all of the favorite hikes in the database
    const query = `SELECT "hike".name, "hike".location, "hike".description FROM "hike"
                    JOIN "rating" ON "hike".id = "rating".hike_id
                    JOIN "user" ON "user".id = "rating".user_id
                    WHERE "user".id = $1`;

    // This query gets the favorite hikes for that user
    pool.query(query, [req.user.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all favorites', err);
            res.sendStatus(500)
        })
}); // End of the Get route


// Sends a Post request to the database and adds the new data to the user's list of favorites
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('got to post request', req.body)
    console.log('req user id', req.user.id)

    // Insert into the rating table 
    const query =  `INSERT INTO "rating" ("user_id", "hike_id", "favorite")
                    VALUES ($1, $2, TRUE)
                    ON CONFLICT ("user_id", "hike_id")
                    DO UPDATE SET "favorite" = TRUE 
                    WHERE "rating".user_id = $1 AND "rating".hike_id = $2;`;
    // Save values to add
    const values = [req.user.id, req.body.details];
    // This query makes the new favorite entry
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);

        // Catch for the query
        }).catch(err => {
            console.log('ERROR: in Posting Favorite to the database', err);
            res.sendStatus(500)
        })
}); // End of Post Route

module.exports = router;