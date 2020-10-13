import firebase from 'firebase/app';
import 'firebase/auth';

const addButtonsIfUserIsLoggedIn = (souvenirObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('.button-body').html(
        `<a href='#' id="${souvenirObject.firebaseKey}"
        class="update-souvenir btn btn-info"><i class="far fa-edit"></i> Update Souvenir</a>
        <a href="#" id="${souvenirObject.firebaseKey}" class="btn btn-danger delete-souvenir">Delete Souvenir</a>`
      );
    }
  });
};

const souvenirMaker = (souvenirObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${souvenirObject.firebaseKey}">
                      <div class="card-body">
                        <h5 class="card-title">${souvenirObject.name}</h5>
                        </div>
                        <div class="body">
                          <div>
                            <img class="image" src="${souvenirObject.image}" alt="${souvenirObject.name}">
                          </div>
                          <p class="card-info">Price: ${souvenirObject.price}</p> 
                        </div>
                        <div class="button-body"></div>
                    </div>`;
  addButtonsIfUserIsLoggedIn(souvenirObject);
  return domString;
};

export default { souvenirMaker };
