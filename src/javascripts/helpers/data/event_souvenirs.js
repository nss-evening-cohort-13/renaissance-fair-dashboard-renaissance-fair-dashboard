import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventSouvenirs = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/souvenirsOfEvent/.json?orderBy="eventUid"&equalTo="${eventFirebaseKey}"`)
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

const addSouvenirsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/souvenirsOfEvent.json`, dataObject).then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/souvenirOfEvent/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));
};

export default { getEventSouvenirs, addSouvenirsOfEvents };
