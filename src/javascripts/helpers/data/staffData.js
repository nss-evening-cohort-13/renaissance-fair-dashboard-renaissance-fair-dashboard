import axios from 'axios';
import apiKeys from '../apiKeys.json';

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

const addStaff = (data) => axios
  .post(`${baseUrl}/staff/.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/staff/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const getSingleStaff = (staffFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staff/${staffFirebaseKey}.json`).then((response) => {
    const thisStaff = response.data;
    resolve(thisStaff);
  }).catch((error) => reject(error));
});

const updateStaff = (firebaseKey, staffObject) => axios.patch(`${baseUrl}/staff/${firebaseKey}.json`, staffObject);

export default {
  getAllStaff,
  deleteStaff,
  addStaff,
  updateStaff,
  getSingleStaff
};
