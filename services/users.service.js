const usersService = {
    createUser: (userObj) => {
        console.log('Reached user service');
        console.log(userObj);
        // Save the userObj to the database
    },

    deleteUser: (userID) => {
        console.log(`Deleted user: ${userID} in service`);
    }
}

module.exports = usersService;