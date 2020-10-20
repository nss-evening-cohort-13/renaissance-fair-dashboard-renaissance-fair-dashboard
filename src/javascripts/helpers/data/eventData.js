import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEvents = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/events.json`)
    .then((response) => {
      const allEvents = response.data;
      const events = [];
      if (allEvents) {
        Object.keys(allEvents).forEach((eventId) => {
          events.push(allEvents[eventId]);
        });
      }
      resolve(events);
    })
    .catch((error) => reject(error));
});

const addEvent = (data) => axios.post(`${baseUrl}/events.json`, data).then((response) => {
  const update = { firebaseKey: response.data.name };
  axios.patch(`${baseUrl}/events/${response.data.name}.json`, update);
}).catch((error) => console.warn(error));

export default { addEvent, getAllEvents };
