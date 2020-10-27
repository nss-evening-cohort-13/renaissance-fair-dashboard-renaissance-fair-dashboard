import axios from 'axios';
import apiKeys from '../apiKeys.json';
import souvenirsData from './souvenirsData';

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

const deleteSouvenirsOfEvent = (firebaseKey) => {
  axios.delete(`${baseUrl}/souvenirsOfEvent/${firebaseKey}.json`);
};

const addSouvenirsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/souvenirsOfEvent.json`, dataObject).then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/souvenirsOfEvent/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));
};

const souvenirsFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  getEventSouvenirs(eventFirebaseKey)
    .then((souvenirsArray) => Promise.all(souvenirsArray.map((souvenirs) => souvenirsData.getSingleSouvenir(souvenirs.souvenirUid))))
    .then((souvenirsObject) => resolve(souvenirsObject))
    .catch((error) => reject(error));
});

export default {
  getEventSouvenirs,
  addSouvenirsOfEvents,
  deleteSouvenirsOfEvent,
  souvenirsFullObject
};
