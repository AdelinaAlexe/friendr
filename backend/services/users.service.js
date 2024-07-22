//const { response } = require('express');
//const { getUser } = require('../controllers/users.controller');
const UserModel = require('../data/users.model');
const { v4: uuidv4 } = require('uuid');

const usersService = {
    getUser: async (username) => {
        response = await UserModel.findOne({ username: username }, {});
        return response;
    },

    createUser: (userObj) => {
        console.log('Reached user service');
        console.log(userObj);
        // Save the userObj to the database

        userObj.id = uuidv4();

        const userToBeCreated = new UserModel(userObj);

        userToBeCreated.save().then(() => {
            console.log('User created');
        });
    },

    deleteUser: async (userID) => {
        try {
            const result = await UserModel.findOneAndDelete({ id: userID });
            if (result) {
                console.log('User deleted:', result);
            } else {
                console.log('User not found');
            }
        } catch (err) {
            console.log('Error in deleting user:', err);
        }
    }
    
}

module.exports = usersService;