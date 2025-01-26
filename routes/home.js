const express = require('express');
const adminController = require('../controllers/home')
const router = express.Router();
const playGroundMiddleware = require('../middlewares/playground');

router.get('/', playGroundMiddleware, adminController.homePage);





module.exports = router;