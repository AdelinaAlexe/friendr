const express = require('express');
const usersRouter = require('./routers/users.router');

//app.use(express.json());
const app = express();
const port = 3006;

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
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})