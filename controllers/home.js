const Chat = require('../models/chat');
const homePage  = async (req, res) => {
    chats = await Chat.find();
    console.log(chats);
    res.render('index', {user_id: req.session.user._id, chats: chats});
}


module.exports = {homePage}