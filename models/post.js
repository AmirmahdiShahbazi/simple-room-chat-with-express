const connection = require('../database/connection');
const Schema = require('mongoose').Schema;

var PostSchema = new Schema({
    title   : String
  , created_at    : {
        type: Date,
        default: Date.now
  }
});

const Post = connection.model('Post', PostSchema);

module.exports = Post;