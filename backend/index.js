const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routers/users.router');
const postsRouter = require('./routers/posts.router');

//app.use(express.json());
const app = express();
const port = 3008;

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

// app.post('/users/', (req, res) => {
//     console.log(req.body);
//     const userToBeCreated = req.body;
//     console.log(userToBeCreated.firstName);
//     res.send('The user will be created');
//   })

// app.post('/users/', (req, res) => {
//     console.log(req.headers);
//   })



// decomment later - USERS
// app.use('/users', usersRouter)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

// decomment larer - POSTS
app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

mongoose.connect('mongodb+srv://alexeadelina:ne6BaDhXGEIQbHy9@cluster0.fegza19.mongodb.net/friendr?retryWrites=true&w=majority&appName=Cluster0')
          .then(() => {
              console.log('Connected to the database');
          })
          .catch((err) => {
              console.log(err);
          });