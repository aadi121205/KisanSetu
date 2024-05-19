const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;
const mongoose = require('mongoose');
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //axios.post ke liye
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

const passport = require('./authentication/passport');
app.use(passport.initialize());
app.use(passport.session());
require('./authentication/passport');

app.use('/', (req, res) => {
    res.send('hello');
});


mongoose.connect('mongodb+srv://aayush_mongo:mongogupta@cluster0.j8jqacb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch((err) => {
        console.log(err);
})