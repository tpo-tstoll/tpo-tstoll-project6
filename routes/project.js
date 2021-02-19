//Setup packages and routes
const express = require('express');
const router = express.Router();

//Requires data file and assigns variable
const data = require('../data.json');
const {projects} = data;

//Creates route to render 'project' page based upon id. Verifies id is valid, if not sends a 404 error with a custom message
router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    if (projects[id]) {
        res.render('project', projects[id]);
    } else {
        const err = new Error();
        err.status = 404;
        err.message = 'The requested project does not exist'
        next(err);
    }
});

//Exports routes
module.exports = router;