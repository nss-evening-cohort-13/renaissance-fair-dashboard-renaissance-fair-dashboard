import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// STUDENTS: Refactor this to use new Promise syntax
const getAllFood = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/food.json`)
    .then((response) => {
      const theFood = response.data;
      const foodArray = [];
      if (theFood) {
        Object.keys(theFood).forEach((foodId) => {
          foodArray.push(theFood[foodId]);
        });
      }
      resolve(foodArray);
    })
    .catch((error) => reject(error));
});

const deleteFood = (firebaseKey) => axios.delete(`${baseUrl}/food/${firebaseKey}.json`);

const addFood = (data) => axios
  .post(`${baseUrl}/food/.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/food/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default {
  getAllFood,
  deleteFood,
  addFood
};
