import firebase from 'firebase/app';
import 'firebase/auth';
import foodData from '../../helpers/data/foodData';

const addButtonsIfUserIsLoggedIn = (foodObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(`.button-body-${foodObject.firebaseKey}`).html(
        `<a href='#' id="${foodObject.firebaseKey}"
        class="update-food btn btn-info"><i class="far fa-edit"></i> Update food</a>
        <a href="#" id="${foodObject.firebaseKey}" class="btn btn-danger delete-food">Delete food</a>`
      );
      $('body').on('click', '.delete-food', (e) => {
        e.stopImmediatePropagation();
        const firebaseKey = e.currentTarget.id;
        $(`.card#${firebaseKey}`).remove();
        foodData.deleteFood(firebaseKey);
      });
    }
  });
};
const foodMaker = (foodObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${foodObject.firebaseKey}">
                      <div class="card-body">
                        <h5 class="card-title">${foodObject.name}</h5>
                        </div>
                        <div class="body">
                          <div>
                            <img class="image" src="${foodObject.image}" alt="${foodObject.name}">
                          </div>
                          <p class="card-info">Price: ${foodObject.price}</p> 
                        </div>
                        <div class="button-body-${foodObject.firebaseKey}"></div>
                    </div>`;
  addButtonsIfUserIsLoggedIn(foodObject);
  return domString;
};
export default { foodMaker };
