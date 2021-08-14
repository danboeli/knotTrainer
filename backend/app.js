const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');


const express = require('express');
const app = express();

//Middleware
app.use(express.json());
app.use(cors());


//Home Route
app.get('/', (req, res)=>{
    res.send('We are on home of the knots.');
});


//Import Routes
const knotsRoute = require('./routes/knots.js');
app.use('/knots', knotsRoute);



//Connect do DB
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=>{
        console.log('Connected to MongoDB!');
});


//Listen
const defaultPort = 3000;
//Set port by environment variable if set, if not use default port
//env variable can be set e.g with powershell as $env:PORT = 5000
const port = process.env.PORT || defaultPort; 
app.listen(port, () => {console.log('Listening to port '+ port +'...')});