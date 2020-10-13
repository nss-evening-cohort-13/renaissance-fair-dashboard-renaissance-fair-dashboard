import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import navbar from '../../components/navbar/navbar';
import viewHelper from '../viewHelper';

const checkLoginStatus = () => {
  viewHelper.viewListener('souvenirs-link');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      viewHelper.viewListener('souvenirs-link');
      navbar.navbar(currentUser.name);
      $('#google-auth').addClass('hide');
      $('#welcome-guest').addClass('hide');
    } else {
      navbar.navbar('guest');
      $('.crud-btn').addClass('hide');
      $('#user-name').addClass('hide');
      $('#navbar-logout-button').addClass('hide');
      auth.loginButton();
    }
  });
};

export default { checkLoginStatus };
