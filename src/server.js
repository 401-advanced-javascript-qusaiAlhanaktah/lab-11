

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const basicAuth = require('./lib/basic-auth-middleware.js');
// const users = require('./lib/users.js');
const authRouter = require('./lib/routes.js');
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(authRouter);

// app.post('/signup', (req, res) => {
//   users.save(req.body)
//     .then(user => {
//       let token = users.generateToken(user);
//       res.status(200).send(token);
//     });
// });

// app.post('/signin', basicAuth, (req, res) => {
//   res.status(200).send(req.token);
// });

// app.get('/users', basicAuth, (req, res) => {
//   res.status(200).json(users.list());
// });

module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log('I am Litening'));

  },
};