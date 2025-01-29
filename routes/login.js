const express = require('express');
const loginController = require('../controllers/login')
const router = express.Router();
const guestMiddleware = require('../middlewares/guest');

router.get('/', guestMiddleware, loginController.loginPage);
router.post('/', guestMiddleware, loginController.login);





module.exports = router;