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
    // POST route code here
});

module.exports = router;