import axios from 'axios';
import showData from './showsData';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventShows = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/showsOfEvent/.json?orderBy="eventUid"&equalTo="${eventFirebaseKey}"`)
    .then((eventResponse) => {
      console.warn('eventResponseData', eventResponse.data);
      const theMatchingObjects = eventResponse.data;
      const matchingObjectsArray = [];
      if (theMatchingObjects) {
        Object.keys(theMatchingObjects).forEach((firebaseKey) => {
          matchingObjectsArray.push(theMatchingObjects[firebaseKey]);
        });
      }
      console.warn('matchingShowsObjectsArray', matchingObjectsArray);
      showData.getAllShows().then((showResponse) => {
        const showObjectsArray = [];
        console.warn('showResponse', showResponse);
        matchingObjectsArray.forEach((object) => {
          console.warn(object.showUid);
          const showObject = showResponse.find((show) => show.firebasekey === object.showUid);
          console.warn(showObject);
          const newShowObject = {
            name: showObject.name,
            price: 100
          };
          showObjectsArray.push(newShowObject);
        });
        console.warn(showObjectsArray);
        resolve(showObjectsArray);
      });
    })
    .catch((error) => reject(error));
});

const addShowsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/showsOfEvent.json`, dataObject);
};

// const getEventShow = (showFirebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/shows/.json?orderBy="firebaseKey"&equalTo="${showFirebaseKey}"`)
//     .then((response) => {
//       const show = Object.values(response.data);
//       const thisShow = show[0];
//       const showObject = { name: thisShow.name, price: 100 };
//       resolve(showObject);
//     }).catch((error) => reject(error));
// });

export default { addShowsOfEvents, getEventShows };
