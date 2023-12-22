var express = require('express');
var router = express.Router({mergeParams: true});

//Routes for client to get, add, update, or remove entries from database.
//Starting with "get" since only that is needed right now.
var pool = require('../db_login');

//Method that retrieves all the text for a "figure label" based on that
//figure's ID. "request" needs to include that ID, and this method needs
//to access it.
const getTextByFigure = (request, response) => {
    const figure = request.params.figure //fine for this to be a string

    //don't need to enclose $1 in single quotes, that's done for you
    pool.query('SELECT title, text, comments FROM translations WHERE figure = $1', 
        [figure], 
        (error, results) => {
            if(error) {
                //stops the server and prints stacktrace
                throw(error)
            }
            //full results object has a lot of info that isn't "DB table rows"
            response.status(200).send(results.rows)
        }
    )
}

//app.js will send requests that have "/api" in the URL here, to this router
//consult with express routing resources to make sure I'm doing this right
router.get('/', getTextByFigure)

module.exports = router;