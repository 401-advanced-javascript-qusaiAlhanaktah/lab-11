

const { server } = require('../server.js');
const supergose = require('@code-fellows/supergoose');
const mockRequest = supergose(server);
const base64 = require('base-64');
describe('Authentication Model',()=>{
  it('POST to /signup to create a new user', ()=>{
    let test = {'username': 'qusai', 'password': '123'};
    mockRequest.post('/signup')
      .send(test)
      .then(data=>{
          console.log(data.text)
        expect(data.text).toEqual(base64.encode(test.password));
      });
  });
  it('POST to /signin to get the user', ()=>{

  });
  it('GET to /users to get all users', ()=>{

  });
});