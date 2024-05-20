const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const farmerController = require('../controllers/farmer');
// const farmer = require('../models/farmer');
const isLoggedIn = require('../middlewares/isLoggedIn');
router.get('/addproduct', farmerController.getAddProduct);
router.get('/products', farmerController.getProductsAll);
router.get('/login', farmerController.getLogin);
router.get('/signup', farmerController.getSignUp);
router.post('/signup', farmerController.postSignUp);
router.get('/profile', isLoggedIn, farmerController.getProfile);
router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/farmer/login' }),
    function (req, res) {
        res.redirect('/farmer/profile');
    });
router.post('/addproduct', farmerController.postAddProduct);
module.exports = router;