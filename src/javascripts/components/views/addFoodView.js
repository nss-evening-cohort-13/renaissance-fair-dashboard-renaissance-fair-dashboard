import form from '../forms/foodForm';

const addFoodView = () => {
  $('#app').html('<div id="food-form">Put food form here</div>');
  form.foodForm();
};

export default { addFoodView };
