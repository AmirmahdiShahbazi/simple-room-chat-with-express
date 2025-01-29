const express = require('express');
const adminController = require('../controllers/home')
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.get('/',authMiddleware, adminController.homePage);





module.exports = router;