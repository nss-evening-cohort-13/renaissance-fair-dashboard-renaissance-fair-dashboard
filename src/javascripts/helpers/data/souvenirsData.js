import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

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

export default { getAllSouvenirs };
