//Setup packages and routes
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

//Calls mainRoutes and projectRoutes from the routes folder
app.use(mainRoutes);
app.use('/project', projectRoutes);

//Creates 404 error if an invalid route is input
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

//Catches error and renders page based upon status for for 404 or general error
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log(`${err.status} -- Oops! It appears something went wrong -- ${err.message}`)
    if (err.status === 404) {
        res.render('page-not-found', {err});
    } else {
        res.render('error', {err});
    }
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});