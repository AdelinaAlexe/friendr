//const { response } = require('express');
//const { getUser } = require('../controllers/users.controller');
const PostModel = require('../data/posts.model');
const { v4: uuidv4 } = require('uuid');

const postsService = {
    getPost: async (postID) => {
        response = await PostModel.findOne({ id: postID }, {});
        return response;
    },

    getAllPosts : async () => {
        response = await PostModel.find({}, {});
        return response;
    },

    removePostLikes: async (postID, username) => {
        await PostModel.updateOne({ id: postID }, { $pull: { likes: username } });
    },

    addPostLikes: async (postID, username) => {
        await PostModel.updateOne({ id: postID }, { $push: { likes: username } });
    },

    createPost: (postObj) => {

        postObj.id = uuidv4();
        postObj.date = new Date().toISOString();

        console.log('Reached post service');
        console.log(postObj);
        // Save the userObj to the database

        const postToBeCreated = new PostModel(postObj);

        postToBeCreated.save().then(() => {
            console.log('Post created');
        });
    },

    deletePost: async (postID) => {
        try {
            const result = await PostModel.findOneAndDelete({ id: postID });
            if (result) {
                console.log('Post deleted:', result);
            } else {
                console.log('Post not found');
            }
        } catch (err) {
            console.log('Error in deleting post:', err);
        }
    }
}

module.exports = postsService;