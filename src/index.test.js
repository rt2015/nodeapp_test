var request = require('supertest');
var {app,server} = require('../index.js');
describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World" }', done);
    });
}); 
afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  server.close()
  done()
})
