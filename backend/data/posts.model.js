const mongoose = require('mongoose');

const PostModel = mongoose.model('Post', 
    { 
        id: String,
        date: String,
        title: String,
        author: String,
        description: String,
        likes: [String]
    });


module.exports = PostModel;