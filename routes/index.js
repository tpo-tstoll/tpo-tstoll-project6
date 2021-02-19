//Setup packages and routes
const express = require('express');
const router = express.Router();

//Requires data file and assigns variable
const data = require('../data.json');
const {projects} = data;

//Creates route to render 'index' page and sends data object
router.get('/', (req,res) => {
    res.render('index', {projects});
})

//Creates route to render 'about' page
router.get('/about', (req,res) => {
    res.render('about');
})

//Exports routes
module.exports = router;