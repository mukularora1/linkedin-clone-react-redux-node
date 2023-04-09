import axios from 'axios';

describe('API endpoint', () => {
  it('returns a successful response', async () => {
    // Make an HTTP request to the API endpoint
    const credentials = {
      password: 'Reset@12345',
      email: 'mukularora@gmail.com',
    };
    const response = await axios.post('sign-in', credentials);

    // Assert that the response status is 200 OK
    expect(response.status).toEqual(200);

    // Assert that the response body contains the expected data
    expect(response).toHaveProperty('data');
    expect(response.data).toHaveLength(1);
    // optional
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('is_auth');
  });
});
