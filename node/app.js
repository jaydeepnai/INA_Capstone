const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const cors = require("cors");
const db = require("./db/db.js");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.use('/', routes);

app.listen(3000, () => {
  //console.log('Server started on port 3000');
});