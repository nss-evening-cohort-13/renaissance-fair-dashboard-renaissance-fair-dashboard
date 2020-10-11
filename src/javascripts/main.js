import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from '../../apiKeys.json';
import authData from './helpers/data/authData';
// import navbar from './components/navbar/navbar';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  // navbar.navbar();
};

init();
