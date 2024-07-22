//const { default: mongoose } = require('mongoose');
//const { use } = require('../routers/users.router');
const postsService = require('../services/posts.service');
const PostModel = require('../data/posts.model');
const { get } = require('mongoose');
const { post } = require('../routers/posts.router');
//const { response } = require('express');


const postsController = {
    getPost: async (req, res) => {
        console.log('Reached GET post controller');
        const postID = req.params.id;
        const postObj = await postsService.getPost(postID);
        res.status(200).send(postObj);
    },

    updatePostLikes: async (req, res) => {
        console.log('Reached PATCH post likes controller');
        const postID = req.params.id;
        const username = req.body.username; 

        if ( !username ) {
            res.status(400).send('Username is missing');
            return;
        }

        console.log(req.params.id);

        const postObj = await postsService.getPost(postID);
        if (!postObj) {
            res.status(404).send('Post not found');
            return;
        }

        const likes = postObj.likes;

        if (likes.includes(username)) {
            await postsService.removePostLikes(postID, username);
        } else {
            await postsService.addPostLikes(postID, username);
        }

        const updatePostPostObj = await postsService.getPost(postID);
        res.status(200).send(updatePostPostObj);

    },

    getAllPosts: async (req, res) => {
        console.log('Reached GET all posts controller');
        const posts = await postsService.getAllPosts();
        res.status(200).send(posts);
    },

    createPost: async (req, res) => {
        console.log('Reached CREATE post controller');
        const postToBeCreated = req.body;

        // validate user object from request
        if (//!userToBeCreated ||
            !postToBeCreated?.title ||
            !postToBeCreated?.description ||
            !postToBeCreated?.author
        ) {
                res.status(400).send('Post object is missing');
                return;
            }

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