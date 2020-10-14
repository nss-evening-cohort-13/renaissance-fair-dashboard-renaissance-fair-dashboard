import firebase from 'firebase/app';
import 'firebase/auth';
import staffData from '../../helpers/data/staffData';

const addButtonsIfUserIsLoggedIn = (staffObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(`.button-body-${staffObject.firebaseKey}`).html(
        `<a href='#' id="${staffObject.firebaseKey}"
        class="update-staff btn btn-info"><i class="far fa-edit"></i> Fix my errors</a>
        <a href="#" id="${staffObject.firebaseKey}" class="btn btn-danger delete-staff">Delete Crappy Staff</a>`
      );
    }
  });
  $('body').on('click', '.delete-staff', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    staffData.deleteStaff(firebaseKey);
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
      <p class="card-info">Role: ${staffObject.role}</p> 
    </div>
    <div class="button-body-${staffObject.firebaseKey}"></div>
</div>`;
  addButtonsIfUserIsLoggedIn(staffObject);
  return domString;
};

export default { staffMaker, addButtonsIfUserIsLoggedIn };
