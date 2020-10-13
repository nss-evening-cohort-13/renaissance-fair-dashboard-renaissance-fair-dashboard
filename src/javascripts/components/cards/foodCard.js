import firebase from 'firebase/app';
import 'firebase/auth';

const addButtonsIfUserIsLoggedIn = (foodObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('.button-body').html(
        `<a href='#' id="${foodObject.firebaseKey}"
          class="update-show btn btn-info"><i class="far fa-edit"></i> Update Show</a>
          <a href="#" id="${foodObject.firebaseKey}" class="btn btn-danger delete-show">Delete show</a>`
      );
    }
  });
};

const foodMaker = (foodObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${foodObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${foodObject.name}</h5>
    </div>
    <div class="card-body">
    <div class="image">
      <img class="image" src="${foodObject.image}" alt="${foodObject.name}">
    </div>
    <p class="card-info">Price: ${foodObject.price}</p>
    <div class="button-body"></div>
</div>`;
  addButtonsIfUserIsLoggedIn(foodObject);
  return domString;
};

export default { foodMaker };
