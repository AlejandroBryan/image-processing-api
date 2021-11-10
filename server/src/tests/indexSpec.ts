/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

describe('Test endpoint responses', () => {
  it('gets the api endpoint /api', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(404);
  });
});

describe('Test endpoint responses', () => {
  it('gets the api endpoint /api/images', async () => {
    const response = await request.get('/api/images/undefined');
    expect(response.status).toBe(404);
  });
});
