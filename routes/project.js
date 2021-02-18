const express = require('express');
const router = express.Router();

const data = require('../data.json');
const {projects} = data;

router.get('/:id', (req, res) => {
    const {id} = req.params;
    if (id <= 4) {
    res.render('project', projects[id]);
    } else {
        res.redirect('../');
    }
});

module.exports = router;