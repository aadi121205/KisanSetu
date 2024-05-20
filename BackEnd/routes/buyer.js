const path = require('path');
const express = require('express');
const router = express.Router();

const buyerController = require('../controllers/buyer');

// router.get('/', (req, res,next) => {
//     res.render('buyer/buyerhome')
// })

router.get('/login', buyerController.getLogin);
router.get('/signup', buyerController.getSignUp);
router.post('/signup', buyerController.postSignUp);
module.exports = router;