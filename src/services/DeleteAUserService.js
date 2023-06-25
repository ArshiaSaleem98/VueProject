import { BASE_API_URL } from '@/config';
import { TEST_BASE_API_URL } from '@/config';
import axios from 'axios';

export default {
  deleteUser(userId) {
    const timestamp = new Date().getTime();

    let apiUrl;
    if (typeof Cypress !== 'undefined' && Cypress.env('isTesting')) {
      apiUrl = TEST_BASE_API_URL;
    } else {
      apiUrl = BASE_API_URL;
    }
    return axios
      .delete(apiUrl + '/' + userId + `?timestamp=${timestamp}`)
      .then((response) => {
        console.log('User deleted successfully:', response);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        throw error;
      });
  },
};
