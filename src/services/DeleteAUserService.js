// DeleteUserService.js
import axios from 'axios';

export default {
  deleteUser(userId) {
    const port = window.location.port;
    const apiUrl = `http://localhost:${port}/webdev/api/users/${userId}`;

    return axios
      .delete(apiUrl)
      .then((response) => {
        console.log('User deleted successfully:', response);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        throw error;
      });
  },
};
