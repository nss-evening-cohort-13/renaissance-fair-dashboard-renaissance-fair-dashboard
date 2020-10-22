import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventShow = (showFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shows/.json?orderBy="firebaseKey"&equalTo="${showFirebaseKey}"`)
    .then((response) => {
      const show = Object.values(response.data);
      const thisShow = show[0];
      const showObject = { name: thisShow.name, price: 100 };
      resolve(showObject);
    }).catch((error) => reject(error));
});

export default { getEventShow };
