import foodView from '../components/views/foodView';
import showsView from '../components/views/showsView';
import staffView from '../components/views/staffView';
import souvenirsView from '../components/views/souvenirsView';
import addShowsView from '../components/views/addShowsView';
import addFoodView from '../components/views/addFoodView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'food-link':
      return foodView.foodView();
    case 'souvenirs-link':
      return souvenirsView.souvenirsView();
    case 'shows-link':
      return showsView.showsView();
    case 'staff-link':
      return staffView.staffView();
    case 'add-show-link':
      return addShowsView.addShowsView();
    case 'add-food-link':
      return addFoodView.addFoodView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.add-show', (e) => {
    viewHelper('add-show-link', e.currentTarget.id);
  });
  $('body').on('click', '.add-food', (e) => {
    viewHelper('add-food-link', e.currentTarget.id);
  });
};

export default { viewListener };
