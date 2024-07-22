const express = require('express');
const postsController = require('../controllers/posts.controller');
const router = express.Router();

router.post('/:id', postsController.createPost); 

router.delete('/:id', postsController.deletePost);

router.get('/:id', postsController.getPost);

router.get('/', postsController.getAllPosts);

router.patch('/:id/likes', postsController.updatePostLikes);


module.exports = router;