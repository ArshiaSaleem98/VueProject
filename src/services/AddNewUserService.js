import BASE_API_URL from '@/config';
import axios from 'axios';

export default {
  addUser(user) {
    return axios
      .post(BASE_API_URL, {
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
