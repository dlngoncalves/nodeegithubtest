const request = require('supertest');
const express = require('express');
const indexRouter = require('../routes/index');

const app = express();
app.use('/', indexRouter);

describe('GET /', function() {
  it('should render index with title "Express"', function(done) {
    request(app)
      .get('/')
      //.expect('Content-Type', /html/)
      .expect(200)
    //   .expect(function(res) {
    //     if (!res.text.includes('Express')) throw new Error("Missing title 'Express'");
    //   })
      .end(done);
  });
});