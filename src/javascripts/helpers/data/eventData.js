import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deleteMenuItem = (firebaseKey) => axios.delete(`${baseUrl}/events/${firebaseKey}.json`);

export default { deleteMenuItem };
