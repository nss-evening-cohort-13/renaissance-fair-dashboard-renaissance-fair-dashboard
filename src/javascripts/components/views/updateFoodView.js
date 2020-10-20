import foodData from '../../helpers/data/foodData';
import form from '../forms/updateFoodForm';

const updateFoodView = (foodFirebaseKey) => {
  $('#app').html('<div id="update-food-form"></div>');
  foodData.getSingleFoodItem(foodFirebaseKey).then((response) => {
    console.warn(response);
    form.updateFoodForm(response);
  });
};

export default { updateFoodView };
