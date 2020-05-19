const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const userRoutes = require('./api/routes/user');

mongoose.connect('mongodb://localhost:27017/CheckWork', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/uploads', express.static('uploads'));

app.use(bodyParser.urlencoded ({
    extended: true
}) )
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Handling routes

app.use( '/products' , productRoutes );
app.use('/user', userRoutes);
module.exports = app;