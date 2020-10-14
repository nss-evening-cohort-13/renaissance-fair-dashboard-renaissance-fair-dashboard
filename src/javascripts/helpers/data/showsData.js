import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getShows = () => new Promise((resolve, reject) => {
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

export default { getShows, deleteShow };
