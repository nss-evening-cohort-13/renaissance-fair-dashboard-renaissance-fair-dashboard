import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirsData from '../../helpers/data/souvenirsData';

const addButtonsIfUserIsLoggedIn = (souvenirObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#add-button').html(
        `<div id="add-souvenir">
           <a href='#'
           class="add-souvenir btn btn-primary btn-lg"><i class="fas fa-plus-circle"></i> Add Souvenir</a>
        </div>`
      );
      $(`.button-body-${souvenirObject.firebaseKey}`).html(
        `<a href='#' id="${souvenirObject.firebaseKey}"
        class="update-souvenir btn btn-info"><i class="far fa-edit"></i> Update Souvenir</a>
        <a href="#" id="${souvenirObject.firebaseKey}" class="btn btn-danger delete-souvenir">Delete Souvenir</a>`
      );
      $('body').on('click', '.delete-souvenir', (e) => {
        e.stopImmediatePropagation();
        const firebaseKey = e.currentTarget.id;
        $(`.card#${firebaseKey}`).remove();
        souvenirsData.deleteSouvenir(firebaseKey);
      });
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
                          <p class="card-info">Price: $${souvenirObject.price}</p> 
                        </div>
                        <div class="button-body-${souvenirObject.firebaseKey}"></div>
                    </div>`;
  addButtonsIfUserIsLoggedIn(souvenirObject);
  return domString;
};

export default { souvenirMaker };
