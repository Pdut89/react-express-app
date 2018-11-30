const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection

db.on('error', console.error.bind(console, 'Mongoose connection error:'))
db.once('open', () => {
  console.log(`MONGO_URI: ${process.env.MONGODB_URI}`)
  console.log('Mongoose connected successfully')
})

module.exports = {mongoose};
