import axios from 'axios';

export default {
  getUsers() {
    const port = window.location.port;
    const apiUrl = `http://localhost:${port}/webdev/api/users`;

    return axios
      .get(apiUrl)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching users:', error);
        throw error;
      });
  },
};
