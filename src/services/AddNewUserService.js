import axios from 'axios';

export default {
  addUser(user) {
    console.log('cons', user);
    const port = window.location.port;
    const apiUrl = `http://localhost:${port}/webdev/api/users`;

    return axios
      .post(apiUrl, {
        id: Number(user.id), // Convert the value to a string if needed        ,
        name: user.name,
        cc: user.cc,
        modifiedBy: user.modifiedBy,
        updatedTs: user.updatedTs,
      })
      .then((response) => console.log('res', user, response))
      .catch((error) => {
        console.error('Error adding user:', error);
        throw error;
      });
  },
};
