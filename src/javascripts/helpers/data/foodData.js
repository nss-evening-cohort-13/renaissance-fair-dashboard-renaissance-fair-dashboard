import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// STUDENTS: Refactor this to use new Promise syntax
const getAllFood = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/food.json`)
    .then((response) => {
      const theFood = response.data;
      const food = [];
      if (theFood) {
        Object.keys(theFood).forEach((foodId) => {
          food.push(theFood[foodId]);
        });
      }
      resolve(food);
    }).catch((error) => reject(error));
});

export default {
  getAllFood
};
