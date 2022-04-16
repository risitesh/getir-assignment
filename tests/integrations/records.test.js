const supertest = require('supertest');
const app = require('../../app');

const request = supertest(app);

describe('Error Scenarios', () => {
    test('It should throw startDate required error', async () => {
      const data = {};
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });

    test('It should throw endDate required error', async () => {
      const data = {
        startDate: '2015-04-22'
      };
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });

    test('It should throw minCount required error', async () => {
      const data = {
        startDate: '2015-04-22',
        endDate: '2015-04-24'
      };
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });

    test('It should throw maxCount required error', async () => {
      const data = {
        startDate: '2015-04-22',
        endDate: '2015-04-24',
        minCount: 200
      };
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });

    test('It should throw startDate should be a proper date in the format of YYYY-MM-DD', async () => {
      const data = {
        startDate: '2015/04/22',
        endDate: '2015-04-24',
        minCount: 200,
        maxCount: 1000
      };
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });

    test('It should throw endDate should be a proper date in the format of YYYY-MM-DD', async () => {
      const data = {
        startDate: '2015-04-22',
        endDate: '24/04/2015',
        minCount: 200,
        maxCount: 1000
      };
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });

    test('It should throw minCount should be a number and greater than 0', async () => {
      const data = {
        startDate: '2015-04-22',
        endDate: '2015-04-24',
        minCount: "5a",
        maxCount: 1000
      };
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });

    test('It should throw maxCount should be a number and greater than 0', async () => {
      const data = {
        startDate: '2015-04-22',
        endDate: '2015-04-24',
        minCount: 200,
        maxCount: "-5"
      };
      const response = await request.post('/api/records').send(data);
      expect(response.status).toBe(400);
      const responseBody = JSON.parse(response.text);
      expect(responseBody.code).toBe(2);
    });
});