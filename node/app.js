const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const app = express();
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
  //console.log('Server started on port 3000');
});