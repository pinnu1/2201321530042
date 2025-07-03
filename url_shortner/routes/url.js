const express = require('express');
const router = express.Router();
const {handlegenerateNewShortURL}= require('../controllers/url');
router.post('/', handlegenerateNewShortURL)
.get('/', (req, res) => {
  res.send('Hello World!')
});
module.exports = router;

