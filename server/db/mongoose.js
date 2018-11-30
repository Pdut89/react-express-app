const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection

db.on('error', console.error.bind(console, 'Mongoose connection error:'))
db.once('open', () => {
  console.log('Mongoose connected successfully')
})

module.exports = {mongoose};
