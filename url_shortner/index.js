const express = require('express');
const app = express();
const path = require('path');

const {connecttoMongoDB}= require('./connection');
const urlRoute= require('./routes/url');
const URL = require('./models/url');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/url', urlRoute);

connecttoMongoDB('mongodb://localhost:27017/urlshortener').then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.error('Error connecting to database', err.message);
});

app.get('/home/:shortID',async (req,res)=>{
    const shortID =req.params.shortID;
   const entry= await URL.findOneAndUpdate({shortId:shortID},
        {$inc:{totalclicks:1},
        $push:{visitHistory:{timestamp:Date.now()}}})


        return res.redirect(entry.redirectURL);

})
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));
app.get('/', async (req, res) => {
    const allURLs = await URL.find();
  res.render('index');
});





const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



