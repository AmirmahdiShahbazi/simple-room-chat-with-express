const connection = require('../database/connection');
const Schema = require('mongoose').Schema;

var UserSchema = new Schema({
    username   : String
});

const User = connection.model('User', UserSchema);

module.exports = User;