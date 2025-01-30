const connection = require('../database/connection');
const Schema = require('mongoose').Schema;

var ChatSchema = new Schema({
    user   : Object,
    message: String
});

const Chat = connection.model('Chat', ChatSchema);

module.exports = Chat;