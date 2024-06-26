const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.post('/', (req, res) => {
    usersController.createUser(req.body);
    //console.log(req.body);
    res.status(201);
    res.send('The user successfully created');
  })

router.delete('/:id', (req, res) => {
    // console.log(req.body);
    const reqUserid = req.params.id;
    usersController.deleteUser(reqUserid);
    res.status(200).send();
 })

router.get('/', (req, res) => {
   // console.log(req.body);
    const reqUserid = req.query.id;
    res.status(404).send();
})


module.exports = router;