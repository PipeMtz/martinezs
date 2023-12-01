const request = require('supertest');
const url = "http://localhost:3000";
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

  describe('/user', function() {
    it('Responde con el json', function(done) {
      request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
