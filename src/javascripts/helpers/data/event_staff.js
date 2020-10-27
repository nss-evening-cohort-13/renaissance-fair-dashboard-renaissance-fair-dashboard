import axios from 'axios';
import apiKeys from '../apiKeys.json';
import staffData from './staffData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaff = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staffOfEvent/.json?orderBy="eventUid"&equalTo="${eventFirebaseKey}"`)
    .then((eventResponse) => {
      const theMatchingObjects = eventResponse.data;
      const matchingObjectsArray = [];
      if (theMatchingObjects) {
        Object.keys(theMatchingObjects).forEach((firebaseKey) => {
          matchingObjectsArray.push(theMatchingObjects[firebaseKey]);
        });
      }
      resolve(matchingObjectsArray);
    })
    .catch((error) => reject(error));
});

const deleteStaffOfEvent = (firebaseKey) => {
  axios.delete(`${baseUrl}/staffOfEvent/${firebaseKey}.json`);
};

const addStaffOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/staffOfEvent.json`, dataObject).then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/staffOfEvent/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));
};

const staffFullObject = (eventFirebaseKey) => new Promise((resolve, reject) => {
  getEventStaff(eventFirebaseKey)
    .then((staffArray) => Promise.all(staffArray.map((staff) => staffData.getSingleStaff(staff.staffUid))))
    .then((staffObject) => resolve(staffObject))
    .catch((error) => reject(error));
});

export default {
  addStaffOfEvents,
  getEventStaff,
  deleteStaffOfEvent,
  staffFullObject
};
