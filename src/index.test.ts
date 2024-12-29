// index.test.ts
import request from 'supertest';
import app from './index'; // Import the Express app

describe('GET /', () => {
  it('should return status "healthy" and a timestamp', async () => {
    const response = await request(app).get('/health'); // Send a GET request to '/health'

    // Check if the status is 200
    expect(response.status).toBe(200);

    // Check if the response body contains "status" and "timestamp"
    expect(response.body.status).toBe('healthy');
    expect(typeof response.body.timestamp).toBe('string'); // Ensure timestamp is a string

    // Optionally, you can check if the timestamp is in ISO format
    const timestamp = response.body.timestamp;
    const isValidTimestamp = !isNaN(Date.parse(timestamp)); // Check if it's a valid date string
    expect(isValidTimestamp).toBe(true);
  });
});
