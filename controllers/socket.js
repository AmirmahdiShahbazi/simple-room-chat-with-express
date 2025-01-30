const Chat = require('../models/chat');
const User = require('../models/user');

const sendMessage = async(socket, data) => {
    const user = await User.findOne({_id: data.user_id});
    await Chat.create({user: user, message: data.message})
    data.user = user; 
    socket.broadcast.emit('receive_message', data);
}




module.exports = {sendMessage}