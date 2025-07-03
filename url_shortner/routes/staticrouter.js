const express = require('express');
const router = express.Router();
app.get('/', async (req, res) => {
    const allURLs = await URL.find();
  res.render('index');
});
