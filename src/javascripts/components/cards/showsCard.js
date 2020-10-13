import firebase from 'firebase/app';
import 'firebase/auth';

const addButtonsIfUserIsLoggedIn = (showObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('.button-body').html(
        `<a href='#' id="${showObject.firebaseKey}"
        class="update-show btn btn-info"><i class="far fa-edit"></i> Update Show</a>
        <a href="#" id="${showObject.firebaseKey}" class="btn btn-danger delete-show">Delete show</a>`
      );
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
    <div class="button-body"></div>
</div>`;
  addButtonsIfUserIsLoggedIn(showObject);
  return domString;
};

export default { showMaker };
