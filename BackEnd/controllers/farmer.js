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

module.exports.getAddProduct=(req,res,next)=>{
    res.render('farmer/farmeradd');
}

module.exports.postAddProduct = async (req,res,next)=>{
    const {category,crop_name,quantity,base_price,moisture,function_price,farmer_selected_price} = req.body;
    try{
        await products.create({
            category,
            crop_name,
            quantity,
            base_price,
            moisture,
            function_price,
            farmer_selected_price
        });
        res.render('farmer/farmerprofile');
    }catch(err){
        // req.flash('msg','Error Adding a New Product');
        next(err);
    }
}

module.exports.getProductsAll = async (req,res,next)=>{
    try{
        let allProducts = await products.find();
        // console.log(allProducts)
        res.render('farmer/prodall',{
            products: allProducts
        })
    }catch(err){
        // req.flash('msg','Error Reading All Admin Product');
        next(err);
    }
}
