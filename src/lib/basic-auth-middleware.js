

const base64 = require('base-64');
const Users = require('./users.js');

module.exports = (req, res, next) => {

  if(!req.headers.authorization) { next('invalid login'); }

  let basic = req.headers.authorization.split(' ').pop();
  console.log('req auth headers:', req.headers.authorization);
  console.log('basic:', basic);

  let [user, pass] = base64.decode(basic).split(':');
  let auth = {user, pass};

  console.log('decoded user/pw', auth);
  let newUser = new Users();
  newUser.authenticateBasic(auth)
    .then(validUser => {
      req.token = newUser.generateToken(validUser);
      console.log('token:', req.token);
      next();
    }).catch(() => next('invalid login'));
};