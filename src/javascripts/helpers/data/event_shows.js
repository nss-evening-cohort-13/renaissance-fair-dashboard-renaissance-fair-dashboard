import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventShows = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/showsOfEvent/.json?orderBy="eventUid"&equalTo="${eventFirebaseKey}"`)
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

const addShowsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/showsOfEvent.json`, dataObject);
};

export default { addShowsOfEvents, getEventShows };
