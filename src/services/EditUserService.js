import BASE_API_URL from '@/config';
import axios from 'axios';

const EditUserService = {
  async editUser(id, user) {
    const timestamp = new Date().getTime();

    try {
      return await axios.put(
        BASE_API_URL + '/' + id + `?timestamp=${timestamp}`,
        user
      );
    } catch (error) {
      console.error('Error Editing the user:', error);
      throw error;
    }
  },
};

export default EditUserService;
