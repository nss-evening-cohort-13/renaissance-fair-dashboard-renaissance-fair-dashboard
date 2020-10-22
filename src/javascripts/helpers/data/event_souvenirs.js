import axios from 'axios';
import souvenirData from './souvenirsData';
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
      souvenirData.getAllSouvenirs().then((souvenirResponse) => {
        const souvenirObjectsArray = [];
        matchingObjectsArray.forEach((object) => {
          const souvenirObject = souvenirResponse.find((souvenir) => souvenir.firebaseKey === object.souvenirUid);
          const newSouvenirObject = {
            name: souvenirObject.name,
            price: souvenirObject.price
          };
          souvenirObjectsArray.push(newSouvenirObject);
        });
        resolve(souvenirObjectsArray);
      });
    })
    .catch((error) => reject(error));
});

const addSouvenirsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/souvenirsOfEvent.json`, dataObject);
};

export default { getEventSouvenirs, addSouvenirsOfEvents };
