import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deleteEvent = (firebaseKey) => axios.delete(`${baseUrl}/events/${firebaseKey}.json`);

export default { deleteEvent };
