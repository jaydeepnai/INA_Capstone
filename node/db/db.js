const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jaydeepdnaiimscit20:jaydeepdnaiimscit20@crud.tqlzwxm.mongodb.net/');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //console.log('Database connected successfully');
});


