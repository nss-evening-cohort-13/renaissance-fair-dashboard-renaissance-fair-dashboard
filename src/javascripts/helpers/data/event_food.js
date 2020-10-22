import axios from 'axios';
import foodData from './foodData';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventFood = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/foodOfEvent/.json?orderBy="eventUid"&equalTo="${eventFirebaseKey}"`)
    .then((eventResponse) => {
      const theMatchingObjects = eventResponse.data;
      const matchingObjectsArray = [];
      if (theMatchingObjects) {
        Object.keys(theMatchingObjects).forEach((firebaseKey) => {
          matchingObjectsArray.push(theMatchingObjects[firebaseKey]);
        });
      }
      foodData.getAllFood().then((foodResponse) => {
        const foodObjectsArray = [];
        matchingObjectsArray.forEach((object) => {
          const foodObject = foodResponse.find((food) => food.firebaseKey === object.foodUid);
          const newFoodObject = {
            name: foodObject.name,
            price: foodObject.price
          };
          foodObjectsArray.push(newFoodObject);
        });
        resolve(foodObjectsArray);
      });
    })
    .catch((error) => reject(error));
});

const addFoodOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/foodOfEvent.json`, dataObject);
};

export default { addFoodOfEvents, getEventFood };
