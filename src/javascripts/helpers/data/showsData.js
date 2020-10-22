import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllShows = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/shows.json`)
    .then((response) => {
      const theShows = response.data;
      const showsArray = [];
      if (theShows) {
        Object.keys(theShows).forEach((showId) => {
          showsArray.push(theShows[showId]);
        });
      }
      resolve(showsArray);
    })
    .catch((error) => reject(error));
});

const deleteShow = (firebaseKey) => axios.delete(`${baseUrl}/shows/${firebaseKey}.json`);

const addShow = (data) => axios
  .post(`${baseUrl}/shows/.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/shows/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const getSingleShow = (showsFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shows/${showsFirebaseKey}.json`).then((response) => {
    const thisShow = response.data;
    resolve(thisShow);
  }).catch((error) => reject(error));
});

const updateShow = (firebaseKey, showObject) => axios.patch(`${baseUrl}/shows/${firebaseKey}.json`, showObject);

export default {
  getAllShows, deleteShow, addShow, updateShow, getSingleShow
};
