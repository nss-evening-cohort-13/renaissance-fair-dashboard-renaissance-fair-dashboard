import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addFoodOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/foodOfEvent.json`, dataObject);
};

export default { addFoodOfEvents };
