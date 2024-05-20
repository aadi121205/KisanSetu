const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const buyerController = require('../controllers/buyer');

// router.get('/', (req, res,next) => {
//     res.render('buyer/buyerhome')
// })
const isLoggedIn = require('../middlewares/isLoggedIn');
router.get('/login', buyerController.getLogin);
router.get('/signup', buyerController.getSignUp);
router.post('/signup', buyerController.postSignUp);
router.get('/profile', isLoggedIn, buyerController.getProfile);
router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/buyer/login' }),
    function (req, res) {
        res.redirect('/buyer/profile');
    });

module.exports = router;