//Setup packages and routes
const express = require('express');
const router = express.Router();

//Requires data file and assigns variable
const data = require('../data.json');
const {projects} = data;

//Creates route to render 'project' page based upon id. Verifies id is valid based upon data length, if not directs back to 'index' page
router.get('/:id', (req, res) => {
    const {id} = req.params;
    if (id < projects.length) {
    res.render('project', projects[id]);
    } else {
        res.redirect('../');
    }
});

//Exports routes
module.exports = router;