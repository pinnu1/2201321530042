const mongoose = require('mongoose');
// moongoose.connect('mongodb://localhost:27017/urlshortener',).
// then(() => {
//   console.log('Connected to database');
// }).catch((err) => {
//   console.error('Error connecting to database', err.message);
// });
// const express = require('express');
// const app = express();

async function connecttoMongoDB(url) {
return mongoose.connect(url);
}
module.exports = {
  connecttoMongoDB
};
const urlRoute= require('./routes/url');
