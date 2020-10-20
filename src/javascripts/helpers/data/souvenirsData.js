import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllSouvenirs = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/souvenirs.json`)
    .then((response) => {
      const souvenirData = response.data;
      const souvenirs = [];

      if (souvenirData) {
        Object.keys(souvenirData).forEach((souvenirId) => {
          souvenirs.push(souvenirData[souvenirId]);
        });
      }
      resolve(souvenirs);
    })
    .catch((error) => reject(error));
});

const deleteSouvenir = (firebaseKey) => axios.delete(`${baseUrl}/souvenirs/${firebaseKey}.json`);

const addSouvenir = (data) => axios
  .post(`${baseUrl}/souvenirs.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/souvenirs/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const updateSouvenir = (firebaseKey, souvenirObject) => axios.patch(`${baseUrl}/souvenirs/${firebaseKey}.json`, souvenirObject);

const getSingleSouvenir = (souvenirFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/souvenirs/${souvenirFirebaseKey}.json`).then((response) => {
    const thisSouvenir = response.data;
    resolve(thisSouvenir);
  }).catch((error) => reject(error));
});

export default {
  getAllSouvenirs, deleteSouvenir, addSouvenir, updateSouvenir, getSingleSouvenir
};
