import BASE_API_URL from '@/config';
import axios from 'axios';

export default {
  getUsers() {
    const timestamp = new Date().getTime();
    const apiUrl = `${BASE_API_URL}?timestamp=${timestamp}`;

    return axios
      .get(apiUrl)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching users:', error);
        throw error;
      });
  },
};
