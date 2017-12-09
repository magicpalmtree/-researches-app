const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// set up Express app
const app = express();

const port = process.env.PORT || 8099;

const user = 'admin';
const password = 'admin';

// connect to remote mongodb
mongoose.connect(`mongodb://${user}:${password}@ds135196.mlab.com:35196/researches`);
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
