const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.post('/:id', usersController.createUser); 

router.delete('/:id', usersController.deleteUser);

router.get('/:id', usersController.getUser);


module.exports = router;