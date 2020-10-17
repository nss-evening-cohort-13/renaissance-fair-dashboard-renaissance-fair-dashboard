import firebase from 'firebase/app';
import 'firebase/auth';
import staffData from '../../helpers/data/staffData';

const addButtonsIfUserIsLoggedIn = (staffObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(`.button-body-${staffObject.firebaseKey}`).html(
        `<a href='#' id="${staffObject.firebaseKey}"
        class=" update-btn update-staff btn btn-info"><i class="far fa-edit"></i> Update Staff</a>
        <a href="#" id="${staffObject.firebaseKey}" class=" delete-btn btn btn-danger delete-staff-btn">Delete Crappy Staff</a>`
      );
      $('#add-button').html(
        `<div id="add-staff">
           <a href='#'
           class="add-staff btn btn-primary btn-lg"><i class="fas fa-plus-circle"></i> Add Staff</a>
        </div>`
      );
      $('body').on('click', '.delete-staff-btn', (e) => {
        e.stopImmediatePropagation();
        const firebaseKey = e.currentTarget.id;
        $(`.card#${firebaseKey}`).remove();
        staffData.deleteStaff(firebaseKey);
      });
    }
  });
};
const staffMaker = (staffObject) => {
  const domString = `<div class="card-container entire-card card m-2" style="width: 20rem;" id="${staffObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${staffObject.name}</h5>
    </div>
    <div class="body">
      <div>
        <img class="image" src="${staffObject.image}" alt="${staffObject.name}">
      </div>
      <p class="card-info">Role: ${staffObject.role}</p> 
    </div>
    <div class="button-body button-body-${staffObject.firebaseKey}"></div>
</div>`;
  addButtonsIfUserIsLoggedIn(staffObject);
  return domString;
};

export default { staffMaker, addButtonsIfUserIsLoggedIn };
