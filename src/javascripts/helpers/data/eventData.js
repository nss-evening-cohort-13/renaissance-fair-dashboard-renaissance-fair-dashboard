import axios from 'axios';
import apiKeys from '../apiKeys.json';
import eventFood from './event_food';
import eventShows from './event_shows';
import eventSouvenirs from './event_souvenirs';
import eventStaff from './event_staff';
import showData from './showsData';
import foodData from './foodData';
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

const getEventTotalPrices = (eventFirebaseKey) => new Promise((resolve, reject) => {
  const eventTotal = [];
  eventFood.getEventFood(eventFirebaseKey).then((foodArray) => {
    foodArray.forEach((food) => {
      foodData.getSingleFoodItem(food.foodUid).then((foodObject) => {
        eventTotal.push(parseInt(foodObject.price, 10));
      });
    });
  });
  eventShows.getEventShows(eventFirebaseKey).then((showsArray) => {
    showsArray.forEach((show) => {
      showData.getSingleShow(show.showUid).then((showObject) => {
        eventTotal.push(parseInt(showObject.price, 10));
      });
    });
  });
  eventSouvenirs.getEventSouvenirs(eventFirebaseKey).then((souvenirsArray) => {
    souvenirsArray.forEach((souvenir) => {
      souvenirsData.getSingleSouvenir(souvenir.souvenirUid).then((souvenirsObject) => {
        eventTotal.push(parseInt(souvenirsObject.price, 10));
      });
    });
  });
  eventStaff.getEventStaff(eventFirebaseKey).then((staffArray) => {
    staffArray.forEach((staff) => {
      staffData.getSingleStaff(staff.staffUid).then((staffObject) => {
        eventTotal.push(parseInt(staffObject.price, 10));
      });
    });
  });
  resolve(eventTotal).catch((error) => reject(error));
});

export default {
  addEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
  getEventTotalPrices
};
