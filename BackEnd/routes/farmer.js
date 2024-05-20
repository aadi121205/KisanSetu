const path = require('path');
const express = require('express');
const router = express.Router();

const farmerController = require('../controllers/farmer');

router.get('/login', farmerController.getLogin);
router.get('/signup', farmerController.getSignUp);

module.exports = router;