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
// const portpass = require('./authentication/portpass');
// app.use(portpass.initialize());
// app.use(portpass.session());




const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const buyerRouter = require('./routes/buyer');
app.use('/buyer', buyerRouter);

const farmerRouter = require('./routes/farmer');
app.use('/farmer', farmerRouter);

mongoose.connect('mongodb+srv://aayush_mongo:mongogupta@cluster0.j8jqacb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch((err) => {
        console.log(err);
})