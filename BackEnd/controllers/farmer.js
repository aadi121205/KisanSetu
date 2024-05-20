const mongoose= require('mongoose');
const products = require('../models/product');
const farmer= require('../models/farmer');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.getLogin = (req, res, next) => {
    res.render('farmer/farmerlogin');
}

module.exports.getSignUp = (req, res, next) => {
    res.render('farmer/farmersignup');
}

module.exports.postSignUp = async (req, res, next) => {
    const { username,password,contact,email } = req.body;

    try {
        let user = await farmer.findOne({
            username
        });
        if (user) return res.redirect('/farmer/signup');

        bcrypt.hash(password, saltRounds, async function (err, hash) {
            if(err) return next(err);

            await farmer.create({
                username,
                password: hash,
                contact_no: contact,
                email: email || ""
            })
            res.redirect('/farmer/login');
        });

    } catch (err) {
        next(err);
    }
}

module.exports.getProfile = (req,res,next)=>{
    res.render('farmer/farmerprofile',{
        user:req.user
    })
}