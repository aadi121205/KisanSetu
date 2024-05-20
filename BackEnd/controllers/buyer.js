const mongoose= require('mongoose');
const products = require('../models/product');
const farmer= require('../models/farmer');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.getLogin = (req, res, next) => {
    res.render('buyer/buyerlogin');
}

module.exports.getSignUp = (req, res, next) => {
    res.render('buyer/buyersignup');
}