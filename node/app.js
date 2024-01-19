const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const cors = require("cors");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.use('/', routes);

app.listen(3000, () => {
  //console.log('Server started on port 3000');
});