import axios from 'axios';
import staffData from './staffData';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaff = (eventFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staffOfEvent/.json?orderBy="eventUid"&equalTo="${eventFirebaseKey}"`)
    .then((eventResponse) => {
      console.warn('eventResponseData', eventResponse.data);
      const theMatchingObjects = eventResponse.data;
      const matchingObjectsArray = [];
      if (theMatchingObjects) {
        Object.keys(theMatchingObjects).forEach((firebaseKey) => {
          matchingObjectsArray.push(theMatchingObjects[firebaseKey]);
        });
      }
      console.warn('matchingStaffObjectsArray', matchingObjectsArray);
      staffData.getAllStaff().then((staffResponse) => {
        const staffObjectsArray = [];
        console.warn('staffResponse', staffResponse);
        matchingObjectsArray.forEach((object) => {
          console.warn(object.staffUid);
          const staffObject = staffResponse.find((staff) => staff.firebaseKey === object.staffUid);
          console.warn(staffObject);
          const newStaffObject = {
            name: staffObject.name,
            price: 50
          };
          staffObjectsArray.push(newStaffObject);
        });
        console.warn(staffObjectsArray);
        resolve(staffObjectsArray);
      });
    })
    .catch((error) => reject(error));
});

const addStaffOfEvents = (dataObject) => {
  axios.post(`${baseUrl}/staffOfEvent.json`, dataObject);
};

export default { addStaffOfEvents, getEventStaff };
