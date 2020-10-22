import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventFood = (foodFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/food/.json?orderBy="firebaseKey"&equalTo="${foodFirebaseKey}"`)
    .then((response) => {
      const food = Object.values(response.data);
      const thisFood = food[0];
      const foodObject = { name: thisFood.name, price: thisFood.price };
      resolve(foodObject);
    }).catch((error) => reject(error));
});

export default { getEventFood };
