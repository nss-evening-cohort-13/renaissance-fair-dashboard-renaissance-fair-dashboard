import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaff = (staffFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staff/.json?orderBy="firebaseKey"&equalTo="${staffFirebaseKey}"`)
    .then((response) => {
      const staffMember = Object.values(response.data);
      const thisStaffMember = staffMember[0];
      const staffMemberObject = { name: thisStaffMember.name, price: 50 };
      resolve(staffMemberObject);
    }).catch((error) => reject(error));
});

export default { getEventStaff };
