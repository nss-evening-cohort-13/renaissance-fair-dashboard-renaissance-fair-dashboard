import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventFood = (foodFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/food/.json?orderBy="firebaseKey"&equalTo="${foodFirebaseKey}"`)
    .then((response) => {
      const food = Object.values(response.data);
      const thisFood = food[0];
      console.warn(thisFood);
      resolve(thisFood);
    }).catch((error) => reject(error));
});

export default { getEventFood };
