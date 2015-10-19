/**
 * Created on 10/19/15.
 */

var request = require('supertest')('http://localhost:1555');

describe('Express Backend Test', function() {

  it('Page Status & Content Type OK.', function(done){
    request.get('/')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=UTF-8')
        .end(done)
  });

  it('Test for API static path', function(done) {
    request.get('/api')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end(done)
  });

});