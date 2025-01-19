const Post = require('../models/post');

const adminPage  = (req, res) => {
    const newPost = new Post({
        title: 'test title'
    });
    newPost.save()
        .then(() => console.log('Post saved!', newPost))  
        .catch(err => console.error('Error saving post:', err));
    res.send('Admin Page Response');
}


module.exports = {adminPage}