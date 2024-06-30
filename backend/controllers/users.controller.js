//const { default: mongoose } = require('mongoose');
//const { use } = require('../routers/users.router');
const usersService = require('../services/users.service');
const UserModel = require('../data/users.model');
//const { response } = require('express');


const usersController = {
    getUser: async (req, res) => {
        console.log('Reached GET user controller');
        const userID = req.params.id;
        const userObj = await usersService.getUser(userID);
        res.status(200).send(userObj);
    },

    createUser: async (req, res) => {
        console.log('Reached CREATE user controller');
        const userToBeCreated = req.body;

        // validate user object from request
        if (//!userToBeCreated ||
            !userToBeCreated?.firstName ||
            !userToBeCreated?.lastName ||
            !userToBeCreated?.username ||
            !userToBeCreated?.birthYear ||
            !userToBeCreated?.id
        ) {
                res.status(400).send('User object is missing');
                return;
            }
        console.log(userToBeCreated);
        usersService.createUser(userToBeCreated);
        res.status(201).send('User created successfully');
    },

    deleteUser: async (req, res) => {
        const userID = req.params.id;
        usersService.deleteUser(userID);
        res.status(200).send(`User with id: ${userID} was deleted`);
    }
}

module.exports = usersController;