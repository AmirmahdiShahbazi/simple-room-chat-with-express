const express = require('express');
const adminController = require('../controllers/home')
const router = express.Router();

router.get('/', adminController.homePage);





module.exports = router;