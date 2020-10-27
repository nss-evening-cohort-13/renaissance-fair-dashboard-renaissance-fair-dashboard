import axios from 'axios';
import apiKeys from '../apiKeys.json';
import showData from './showsData';

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

const deleteShowsOfEvent = (firebaseKey) => {
  axios.delete(`${baseUrl}/showsOfEvent/${firebaseKey}.json`);
};

const addShowsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/showsOfEvent.json`, dataObject).then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/showsOfEvent/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));
};

const showsFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  getEventShows(eventFirebaseKey)
    .then((showArray) => Promise.all(showArray.map((Show) => showData.getSingleShow(Show.showUid))))
    .then((showObject) => resolve(showObject))
    .catch((error) => reject(error));
});

export default {
  addShowsOfEvents,
  getEventShows,
  deleteShowsOfEvent,
  showsFullObject
};
