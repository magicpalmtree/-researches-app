const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// set up Express app
const app = express();

const port = process.env.PORT || 8099;

// connect to mongodb
// Uncomment the necessary
// mongoose.connect('mongodb://localhost/researches1');
mongoose.connect('mongodb://localhost/researches');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

// initialize routes
app.use('/api', routes);

// error handling
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

// listen for request
app.listen(port, function(){
    console.log("Server is running...")
});
