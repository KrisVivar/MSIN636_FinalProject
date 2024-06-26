require('colors');
//asyncErrors to errorHandler
require('express-async-errors');
const express = require('express');
const app = express();

//Configurations
require('dotenv').config({path:'./config/app.env'});
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

//Connect to DB
require('./config/db')();

//Middlewares
//Accept/Parse JSON request req.body
app.use(express.json())

//Logger middleware
app.use(require('./middlewares/logger'))

//Home Path
app.all('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'Favorite Scenic Trails API'
    })
})

// Routes 
app.use('/api', require('./routes'))

//Express Error Handler
app.use(require('./middlewares/errorHandler'))

//Run the server
app.listen(PORT, console.log(`Server running on http://${HOST}:${PORT}`.green))