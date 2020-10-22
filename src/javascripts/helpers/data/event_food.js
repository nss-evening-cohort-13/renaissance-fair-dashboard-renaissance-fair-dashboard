import axios from 'axios';
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
      resolve(matchingObjectsArray);
    })
    .catch((error) => reject(error));
});

const addFoodOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/foodOfEvent.json`, dataObject);
};

export default { addFoodOfEvents, getEventFood };
