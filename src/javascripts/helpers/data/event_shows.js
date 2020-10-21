import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addShowsOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/showsOfEvent.json`, dataObject);
};

export default { addShowsOfEvents };
