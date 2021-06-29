const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Sends a get request to the database for all of the trails
router.get('/', (req, res) => {
    const query = `SELECT * FROM "hike" ORDER BY "id" ASC`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all trails', err);
            res.sendStatus(500)
        })
});


// Sends a post request to the database and adds the new data
router.post('/', (req, res) => {
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

        //const createdHikeId = result.rows[0].id

    // Catch for the query
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
});

module.exports = router;