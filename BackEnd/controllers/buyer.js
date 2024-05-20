const mongoose= require('mongoose');
const products = require('../models/product');
const buyer= require('../models/buyer');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.getLogin = (req, res, next) => {
    res.render('buyer/buyerlogin');
}

module.exports.getSignUp = (req, res, next) => {
    res.render('buyer/buyersignup');
}

module.exports.postSignUp = async (req, res, next) => {
    const { username,password,contact,email,IOB } = req.body;

    try {
        let user = await buyer.findOne({
            username
        });
        if (user) return res.redirect('/buyer/signup');

        bcrypt.hash(password, saltRounds, async function (err, hash) {
            if(err) return next(err);

            await buyer.create({
                username,
                password: hash,
                contact_no: contact,
                email: email || "",
                identification_of_business: IOB
            })
            res.redirect('/buyer/login');
        });

    } catch (err) {
        next(err);
    }
}