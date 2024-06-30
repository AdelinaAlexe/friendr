const mongoose = require('mongoose');

const PostModel = mongoose.model('Post', 
    { 
        id: Number,
        date: String,
        title: String,
        userId: Number,
        description: String
    });


module.exports = PostModel;