import { BASE_API_URL } from '@/config';
import { TEST_BASE_API_URL } from '@/config';
import axios from 'axios';

export default {
  getUsers() {
    const timestamp = new Date().getTime();

    let apiUrl;
    if (typeof Cypress !== 'undefined' && Cypress.env('isTesting')) {
      apiUrl = `${TEST_BASE_API_URL}?timestamp=${timestamp}`; // Assuming '/data' is the endpoint for mock-user-data.json in JSON Server
    } else {
      apiUrl = `${BASE_API_URL}?timestamp=${timestamp}`;
    }

    return axios
      .get(apiUrl)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching users:', error);
        throw error;
      });
  },
};
