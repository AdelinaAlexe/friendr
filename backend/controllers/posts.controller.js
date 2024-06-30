//const { default: mongoose } = require('mongoose');
//const { use } = require('../routers/users.router');
const postsService = require('../services/posts.service');
const PostModel = require('../data/posts.model');
//const { response } = require('express');


const postsController = {
    getPost: async (req, res) => {
        console.log('Reached GET post controller');
        const postID = req.params.id;
        const postObj = await usersService.getUser(postID);
        res.status(200).send(postObj);
    },

    createPost: async (req, res) => {
        console.log('Reached CREATE post controller');
        const postToBeCreated = req.body;

        // validate user object from request
        if (//!userToBeCreated ||
            !postToBeCreated?.title ||
            !postToBeCreated?.description ||
            !postToBeCreated?.userId ||
            !postToBeCreated?.id
        ) {
                res.status(400).send('Post object is missing');
                return;
            }
        
        postToBeCreated.date = new Date();
        console.log(postToBeCreated);
        postsService.createPost(postToBeCreated);
        res.status(201).send('Post created successfully');
    },

    deletePost: async (req, res) => {
        const postID = req.params.id;
        postsService.deletePost(postID);
        res.status(200).send(`Post with id: ${postID} was deleted`);
    }
}

module.exports = postsController;