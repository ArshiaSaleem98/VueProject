// DeleteUserService.js
import BASE_API_URL from '@/config';
import axios from 'axios';

export default {
  deleteUser(userId) {
    return axios
      .delete(BASE_API_URL + '/' + userId)
      .then((response) => {
        console.log('User deleted successfully:', response);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        throw error;
      });
  },
};
