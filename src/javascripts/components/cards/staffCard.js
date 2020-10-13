import firebase from 'firebase/app';
import 'firebase/auth';

const addButtonsIfUserIsLoggedIn = (staffObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('.button-body').html(
        `<a href='#' id="${staffObject.firebaseKey}"
        class="update-souvenir btn btn-info"><i class="far fa-edit"></i> Fix my errors</a>
        <a href="#" id="${staffObject.firebaseKey}" class="btn btn-danger delete-souvenir">Delete Crappy Staff</a>`
      );
    }
  });
};
const staffMaker = (staffObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${staffObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${staffObject.name}</h5>
    </div>
    <div class="body">
      <div>
        <img class="image" src="${staffObject.image}" alt="${staffObject.name}">
      </div>
      <p class="card-info">Price: ${staffObject.role}</p> 
    </div>
    <div class="button-body"></div>
</div>`;
  addButtonsIfUserIsLoggedIn(staffObject);
  return domString;
};

export default { staffMaker, addButtonsIfUserIsLoggedIn };
