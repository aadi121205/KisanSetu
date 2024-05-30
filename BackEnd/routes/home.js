const path = require('path');
const express = require('express');
const router = express.Router();

// const homeController = require('../controller/home');
router.get('/', (req, res) => {
    res.render('homepage');
});
router.get('/buyer', (req, res, next) => {
    res.render('buyer/buyerhome');
});
router.get('/farmer',(req,res,next)=>{
    res.render('farmer/farmerhome');
});

//router get where???

module.exports=router;