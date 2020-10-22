import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaff = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staffOfEvent/.json?orderBy="eventUid"&equalTo="${eventFirebaseKey}"`)
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

const addStaffOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/staffOfEvent.json`, dataObject);
};

export default { addStaffOfEvents, getEventStaff };
