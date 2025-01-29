const User = require('../models/user');
const loginPage = (req, res) => {
    res.render('login');
}

const login = async (req, res) => {
    let user = await User.findOne({username: req.body.username});
    if(!user){
        user = await User.create({
            username: req.body.username
        });
    }
    req.session.isLoggedIn = true;
    req.session.user = user;
    res.redirect('/');
}

module.exports = {login, loginPage}