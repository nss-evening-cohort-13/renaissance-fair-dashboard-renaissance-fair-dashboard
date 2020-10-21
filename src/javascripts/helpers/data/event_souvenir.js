import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addSouvenirsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/souvenirsOfEvent.json`, dataObject);
};

export default { addSouvenirsOfEvents };
