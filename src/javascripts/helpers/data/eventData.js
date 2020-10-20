import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addEvent = (data) => axios.post(`${baseUrl}/events.json`, data).then((response) => {
  const update = { firebaseKey: response.data.name };
  axios.patch(`${baseUrl}/events/${response.data.name}.json`, update);
}).catch((error) => console.warn(error));

const deleteEvent = (firebaseKey) => axios.delete(`${baseUrl}/events/${firebaseKey}.json`);

export default { addEvent, deleteEvent };
