// Mongoose setup goes here.
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI, { useNewUrlParser: true }, err => {
    console.log(err || `Successfully connected to mLab: Mongoose-Book-App`)
});

module.exports = mongoose;