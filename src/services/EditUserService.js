import { BASE_API_URL } from '@/config';
import { TEST_BASE_API_URL } from '@/config';
import axios from 'axios';

const EditUserService = {
  async editUser(id, user) {
    console.log('holaedit', user);
    const timestamp = new Date().getTime();

    let apiUrl;
    if (typeof Cypress !== 'undefined' && Cypress.env('isTesting')) {
      apiUrl = TEST_BASE_API_URL;
    } else {
      apiUrl = BASE_API_URL;
    }

    try {
      return await axios.put(
        apiUrl + '/' + id + `?timestamp=${timestamp}`,
        user
      );
    } catch (error) {
      console.error('Error Editing the user:', error);
      throw error;
    }
  },
};

export default EditUserService;
