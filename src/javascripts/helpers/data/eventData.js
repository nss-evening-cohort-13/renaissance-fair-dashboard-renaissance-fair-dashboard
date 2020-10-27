import axios from 'axios';
import apiKeys from '../apiKeys.json';
import eventFood from './event_food';
import eventShows from './event_shows';
import eventSouvenirs from './event_souvenirs';
import eventStaff from './event_staff';
import foodData from './foodData';
import showData from './showsData';
import souvenirsData from './souvenirsData';
import staffData from './staffData';

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

const foodFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  eventFood.getEventFood(eventFirebaseKey)
    .then((foodArray) => Promise.all(foodArray.map((food) => foodData.getSingleFoodItem(food.foodUid))))
    .then((foodObject) => resolve(foodObject))
    .catch((error) => reject(error));
});

const showsFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  eventShows.getEventShows(eventFirebaseKey)
    .then((showArray) => Promise.all(showArray.map((Show) => showData.getSingleShow(Show.showUid))))
    .then((showObject) => resolve(showObject))
    .catch((error) => reject(error));
});

const souvenirsFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  eventSouvenirs.getEventSouvenirs(eventFirebaseKey)
    .then((souvenirsArray) => Promise.all(souvenirsArray.map((souvenirs) => souvenirsData.getSingleSouvenir(souvenirs.souvenirUid))))
    .then((souvenirsObject) => resolve(souvenirsObject))
    .catch((error) => reject(error));
});

const staffFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  eventStaff.getEventStaff(eventFirebaseKey)
    .then((staffArray) => Promise.all(staffArray.map((staff) => staffData.getSingleStaff(staff.staffUid))))
    .then((staffObject) => resolve(staffObject))
    .catch((error) => reject(error));
});

const getAllEventObjects = (eventFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([foodFullObject(eventFirebaseKey),
    showsFullObject(eventFirebaseKey),
    souvenirsFullObject(eventFirebaseKey),
    staffFullObject(eventFirebaseKey)]).then((values) => {
    const mergedValues = [].concat(...values);
    resolve(mergedValues);
  }).catch((error) => reject(error));
});

export default {
  addEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
  getAllEventObjects
};
