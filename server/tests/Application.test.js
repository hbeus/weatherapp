import Chai from 'chai';
import ChaiHTTP from 'chai-http';
import mocha from 'mocha';
import app from '../index.js';
import StatusCode from '../config/StatusCode.js';

Chai.should();
Chai.use(ChaiHTTP);

const randomString = Math.random().toString(36).substring(7);

const testingApplicationNotFound = () => {
  describe('Testing non existing application route', () => {
    it('Expecting 404 not found', (done) => {
      Chai.request(app)
        .get(`/${randomString}`)
        .end((request, response) => {
          response.should.have.a.status(StatusCode.NOT_FOUND);
          done();
        });
    });
  });
};

const testGetAllApplications = () => {
  describe('Testing get all applications route', () => {
    it('Expecting 200 to get all applications', (done) => {
      Chai.request(app)
        .get('/apply')
        .end((request, response) => {
          response.should.have.a.status(StatusCode.OK);
          done();
        });
    });
  });
};

describe('Testing Application API Routes', () => {
  testGetAllApplications();
  testingApplicationNotFound();
});
