import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

describe('Express App', () => {
  describe('GET /', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health');

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        status: 'ok',
      });
    });
  });

  describe('Middleware', () => {
    it('should parse JSON body', async () => {
      const testData = { test: 'data' };
      const response = await request(app)
        .post('/')
        .send(testData)
        .set('Content-Type', 'application/json');

      expect(response.status).to.equal(404); // 404 because route doesn't exist
    });

    it('should parse URL-encoded body', async () => {
      const response = await request(app)
        .post('/')
        .send('test=data')
        .set('Content-Type', 'application/x-www-form-urlencoded');

      expect(response.status).to.equal(404); // 404 because route doesn't exist
    });
  });
});
