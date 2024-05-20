const path = require('path');
const express = require('express');
const router = express.Router();

const farmerController = require('../controllers/farmer');
const farmer = require('../models/farmer');

router.get('/login', farmerController.getLogin);
router.get('/signup', farmerController.getSignUp);
router.post('/signup', farmerController.postSignUp);
module.exports = router;