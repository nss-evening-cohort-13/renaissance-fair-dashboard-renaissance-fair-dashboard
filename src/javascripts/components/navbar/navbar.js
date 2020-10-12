import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();
    // NOTE FOR STUDENTS
    // Remove session storage if they log out in the same session and in case another user logs in, we want the API check to happen.
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const navbar = (currentUser) => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">FreeLancer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item mx-3"  id="souvenirs-link">
        <a class="nav-link" href="#"><i class="fas fa-crown"></i> Souvenirs</a>
      </li>
      <li class="nav-item mx-3" id="staff-link">
        <a class="nav-link" href="#"><i class="far fa-grin"></i> Staff</a>
      </li>
      <li class="nav-item mx-3" id="food-link">
        <a class="nav-link" href="#"><i class="fas fa-drumstick-bite"></i> Food</a>
      </li>
      <li class="nav-item mx-3" id="shows-link">
        <a class="nav-link" href="#"><i class="fas fa-feather-alt"></i> Shows</a>
      </li>
    </ul>
        <ul class="navbar-nav ml-auto">
          <li class="user-info-nav" id="welcome-guest">
            Welcome, guest!
          </li>
          <li class="user-info-nav" id="user-name">
            Hello, ${currentUser}!
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-info p-2" id="google-auth">Log In</button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Log Out</button>
          </li>
        </ul>
      </div>
    </nav>`
  );
  logoutEvent();
};

export default { navbar };
