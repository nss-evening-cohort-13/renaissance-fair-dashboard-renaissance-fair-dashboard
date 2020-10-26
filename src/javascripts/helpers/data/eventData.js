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

const foodTotalPrices = (eventFirebaseKey) => new Promise((resolve, reject) => {
  let foodTotal = 0;
  eventFood.getEventFood(eventFirebaseKey)
    .then((foodArray) => Promise.all(foodArray.map((food) => foodData.getSingleFoodItem(food.foodUid))))
    .then((foodObjects) => foodObjects.forEach((food) => {
      foodTotal += parseInt(food.price, 10);
    }))
    .then(() => resolve(foodTotal))
    .catch((error) => reject(error));
});

const showsTotalPrices = (eventFirebaseKey) => new Promise((resolve, reject) => {
  let showsTotal = 0;
  eventShows.getEventShows(eventFirebaseKey)
    .then((showsArray) => Promise.all(showsArray.map((shows) => showData.getSingleShow(shows.showUid))))
    .then((showsObjects) => showsObjects.forEach((show) => {
      showsTotal += parseInt(show.price, 10);
    }))
    .then(() => resolve(showsTotal))
    .catch((error) => reject(error));
});

const souvenirsTotalPrices = (eventFirebaseKey) => new Promise((resolve, reject) => {
  let souvenirsTotal = 0;
  eventSouvenirs.getEventSouvenirs(eventFirebaseKey)
    // execute getSinglesouvenirs for all elements in the array and resolve when all are resolved
    .then((souvenirsArray) => Promise.all(souvenirsArray.map((souvenirs) => souvenirsData.getSingleSouvenir(souvenirs.souvenirUid))))
    // Add up the the prices to variable
    .then((souvenirsObjects) => souvenirsObjects.forEach((souvenir) => {
      souvenirsTotal += parseInt(souvenir.price, 10);
    }))
    // resolve the promise with the final total
    .then(() => resolve(souvenirsTotal))
    .catch((error) => reject(error));
});

const staffTotalPrices = (eventFirebaseKey) => new Promise((resolve, reject) => {
  eventStaff.getEventStaff(eventFirebaseKey).then((staffArray) => {
    let staffTotal = 0; let resolveCounter = 0;
    staffArray.forEach((staff) => {
      staffData.getSingleStaff(staff.staffUid)
        .then((staffObject) => {
          staffTotal += parseInt(staffObject.price, 10);
          // eslint-disable-next-line no-plusplus
          if (++resolveCounter === staffArray.length) {
            resolve(staffTotal);
          }
        })
        .catch((e) => reject(e));
    });
  }).catch((error) => reject(error));
});

export default {
  addEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
  staffTotalPrices,
  foodTotalPrices,
  souvenirsTotalPrices,
  showsTotalPrices
};
