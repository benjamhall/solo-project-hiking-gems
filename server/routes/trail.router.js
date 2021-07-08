const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// Sends a Get request to the database for all of the trails
router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT "hike".*, "rating".favorite, "rating".ratings FROM "hike"
                    LEFT JOIN "rating" ON "hike".id = "rating".hike_id
                    AND "rating".user_id = $1
                    ORDER BY "rating".id ASC;`;

    pool.query(query, [req.user.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all trails', err);
            res.sendStatus(500)
        })
}); // End of the Get route


// Sends a Post request to the database and adds the new data
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);

    // Returning "id" will give us back the id of the created hike
    const insertHikeQuery = `
    INSERT INTO "hike" ("name", "location", "description")
    VALUES ($1, $2, $3)
    RETURNING "id";`

    // This query makes the new hike entry
    pool.query(insertHikeQuery, [req.body.name, req.body.location, req.body.description])
        .then(result => {
            console.log('New Hike Id:', result.rows[0].id) // We have the Id

            // Catch for the query
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        })
}); // End of Post Route


// Sends a Put request to the database to update that Hike in the database
router.put('/:id', rejectUnauthenticated, (req, res) => {
    let hikeId = req.params.id;
    console.log('Hike Id in router.put is', hikeId);

    let updatedHike = req.body;
    console.log('the updated hike is', updatedHike);

    let query = `UPDATE "hike" SET "name" = $1, "location" = $2, "description" = $3
                    WHERE "hike".id = $4;`
    pool.query(query, [updatedHike.name, updatedHike.location, updatedHike.description, hikeId])
        .then(response => {
            console.log(response.rowCount);
            res.sendStatus(202)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
}); //End of Put Route


// Delete a hike in the database
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let hikeId = req.params.id;
    console.log('Received Request to delete ', hikeId);
    console.log('req.params', req.params)


    const query = `DELETE FROM "hike" WHERE "id" = $1;`;

    pool.query(query, [hikeId])
        .then((result) => {
            console.log('Hike deleted', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in deleting hike', error);
            res.sendStatus(500);
        })
}) //End of Delete Route


module.exports = router;