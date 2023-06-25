import { BASE_API_URL } from '@/config';
import { TEST_BASE_API_URL } from '@/config';
import axios from 'axios';

export default {
  addUser(user) {
    const timestamp = new Date().getTime();
    let apiUrl;
    if (typeof Cypress !== 'undefined' && Cypress.env('isTesting')) {
      apiUrl = `${TEST_BASE_API_URL}?timestamp=${timestamp}`; // Assuming '/data' is the endpoint for mock-user-data.json in JSON Server
    } else {
      apiUrl = `${BASE_API_URL}?timestamp=${timestamp}`;
    }
    return axios
      .post(apiUrl, {
        id: Number(user.id),
        name: user.name,
        cc: user.cc,
        modifiedBy: user.modifiedBy,
        updatedTs: user.updatedTs,
      })
      .then((response) => console.log('response', user, response))
      .catch((error) => {
        console.error('Error adding user:', error);
        throw error;
      });
  },
};
