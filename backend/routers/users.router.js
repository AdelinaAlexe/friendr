const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.post('/', usersController.createUser); 

router.delete('/:id', usersController.deleteUser);

router.get('/:username', usersController.getUser);


module.exports = router;