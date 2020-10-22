import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addStaffOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/staffOfEvent.json`, dataObject);
};

export default { addStaffOfEvents };
