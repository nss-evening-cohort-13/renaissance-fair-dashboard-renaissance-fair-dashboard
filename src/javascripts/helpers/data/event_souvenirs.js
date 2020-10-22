import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventSouvenir = (souvenirFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/souvenirs/.json?orderBy="firebaseKey"&equalTo="${souvenirFirebaseKey}"`)
    .then((response) => {
      const souvenir = Object.values(response.data);
      const thisSouvenir = souvenir[0];
      const souvenirObject = { name: thisSouvenir.name, price: thisSouvenir.price };
      resolve(souvenirObject);
    }).catch((error) => reject(error));
});

const addSouvenirsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/souvenirsOfEvent.json`, dataObject);
};

export default { getEventSouvenir, addSouvenirsOfEvents };
