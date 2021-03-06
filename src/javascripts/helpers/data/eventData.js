import axios from 'axios';
import apiKeys from '../apiKeys.json';
import eventFood from './event_food';
import eventShows from './event_shows';
import eventSouvenirs from './event_souvenirs';
import eventStaff from './event_staff';

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

const getSingleEvent = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/events.json?orderBy="firebaseKey"&equalTo="${eventFirebaseKey}"`)
    .then((response) => {
      const event = Object.values(response.data);
      const thisEvent = event[0];
      resolve(thisEvent);
    }).catch((error) => reject(error));
});

const addEvent = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/events.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/events/${response.data.name}.json`, update)
        .then((response2) => {
          resolve(response2.data.firebaseKey);
        }).catch((error) => console.warn(error));
    }).catch((error) => reject(error));
});

const updateEvent = (firebaseKey, eventObject) => axios.patch(`${baseUrl}/events/${firebaseKey}.json`, eventObject);

const deleteEvent = (firebaseKey) => axios.delete(`${baseUrl}/events/${firebaseKey}.json`);

const getAllEventObjects = (eventFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([eventFood.foodFullObject(eventFirebaseKey),
    eventShows.showsFullObject(eventFirebaseKey),
    eventSouvenirs.souvenirsFullObject(eventFirebaseKey),
    eventStaff.staffFullObject(eventFirebaseKey)]).then((values) => {
    const mergedValues = [].concat(...values);
    resolve(mergedValues);
  }).catch((error) => reject(error));
});

const getAllEventObjectsPrices = (eventFirebaseKey) => new Promise((resolve, reject) => {
  getAllEventObjects(eventFirebaseKey).then((values) => {
    let prices = 0;
    values.forEach((item) => {
      prices += parseInt(item.price, 10);
    });
    resolve(prices);
  }).catch((error) => reject(error));
});

export default {
  addEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
  getAllEventObjects,
  getAllEventObjectsPrices
};
