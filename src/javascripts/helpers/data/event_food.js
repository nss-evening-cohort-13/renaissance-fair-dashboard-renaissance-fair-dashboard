import axios from 'axios';
import apiKeys from '../apiKeys.json';
import foodData from './foodData';

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
      resolve(matchingObjectsArray);
    })
    .catch((error) => reject(error));
});

const deleteFoodOfEvent = (firebaseKey) => {
  axios.delete(`${baseUrl}/foodOfEvent/${firebaseKey}.json`);
};

const addFoodOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/foodOfEvent.json`, dataObject).then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/foodOfEvent/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));
};

const foodFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  getEventFood(eventFirebaseKey)
    .then((foodArray) => Promise.all(foodArray.map((food) => foodData.getSingleFoodItem(food.foodUid))))
    .then((foodObject) => resolve(foodObject))
    .catch((error) => reject(error));
});

export default {
  addFoodOfEvents,
  getEventFood,
  deleteFoodOfEvent,
  foodFullObject
};
