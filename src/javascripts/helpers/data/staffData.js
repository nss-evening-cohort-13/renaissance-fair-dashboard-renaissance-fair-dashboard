import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllStaff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staff.json`).then((response) => {
    const lancaStaff = response.data;
    const staff = [];
    if (lancaStaff) {
      Object.keys(lancaStaff).forEach((staffId) => {
        staff.push(lancaStaff[staffId]);
      });
    }
    resolve(staff);
  }).catch((error) => reject(error));
});

const deleteStaff = (firebaseKey) => axios.delete(`${baseUrl}/staff/${firebaseKey}.json`);

export default {
  getAllStaff,
  deleteStaff,
};
