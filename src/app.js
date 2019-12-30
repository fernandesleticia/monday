const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const dateRoute = require('./routes/dateRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/date', dateRoute);

module.exports = app;
