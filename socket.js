const socketController = require('./controllers/socket');
module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('send_message', (data) => {
            socketController.sendMessage(socket, data);
        });
    });
}