

const express = require('express');
const authRouter = express.Router();
const Users = require('./users.js');
const basicAuth = require('./basic-auth-middleware.js');

authRouter.post('/signup', (req, res,next) => {
  // console.log( new Users);
  let user = new Users(req.body);
  user.save()
    .then(data => {
      // console.log(data);
      let token = user.generateToken(data);
      res.status(200).send(token);
    }).catch(next);
});

authRouter.post('/signin', basicAuth, (req, res) => {
//   let user = new Users(req.body);
  res.status(200).send(req.token);
});

authRouter.get('/users', basicAuth, (req, res) => {
  let user = new Users();
  res.status(200).json(user.list());
});

module.exports = authRouter;