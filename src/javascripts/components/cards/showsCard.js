import firebase from 'firebase/app';
import 'firebase/auth';
import showData from '../../helpers/data/showsData';

const addButtonsIfUserIsLoggedIn = (showObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(`.button-body-${showObject.firebaseKey}`).html(
        `<a href='#' id="${showObject.firebaseKey}"
        class="update-btn update-show btn btn-info"><i class="far fa-edit"></i> Update Show</a>
        <a href="#" id="${showObject.firebaseKey}" class="delete-btn btn btn-danger delete-show">Delete show</a>`
      );
      $('#add-button').html(
        `<div id="add-show">
           <a href='#'
           class="add-show btn btn-primary btn-lg"><i class="fas fa-plus-circle"></i> Add Show</a>
        </div>`
      );
      $('body').on('click', '.delete-show', (e) => {
        e.stopImmediatePropagation();
        const firebaseKey = e.currentTarget.id;
        $(`.card#${firebaseKey}`).remove();
        showData.deleteShow(firebaseKey);
      });
    }
  });
};

const showMaker = (showObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${showObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${showObject.name}</h5>
    </div>
    <div class="body">
      <div>
        <img class="image" src="${showObject.image}" alt="${showObject.name}">
      </div>
      <p class="card-info">Time: ${showObject.time}</p> 
    </div>
    <div class="button-body-${showObject.firebaseKey}"></div>
</div>`;
  addButtonsIfUserIsLoggedIn(showObject);
  return domString;
};

export default { showMaker };
