import foodView from '../components/views/foodView';
import showsView from '../components/views/showsView';
import staffView from '../components/views/staffView';
import souvenirsView from '../components/views/souvenirsView';
import addFoodView from '../components/views/addFoodView';
import addSouvenirsView from '../components/views/addSouvenirsView';
import addShowsView from '../components/views/addShowsView';
import addStaffView from '../components/views/addStaffView';
import updateShowsView from '../components/views/updateShowsView';
import updateStaffView from '../components/views/updateStaffView';

const viewHelper = (id, arg) => {
  $('#app').html('');
  $('#add-button').html('');
  switch (id) {
    case 'food-link':
      return foodView.foodView();
    case 'souvenirs-link':
      return souvenirsView.souvenirsView();
    case 'shows-link':
      return showsView.showsView();
    case 'staff-link':
      return staffView.staffView();
    case 'add-staff-link':
      return addStaffView.addStaffView();
    case 'add-food-link':
      return addFoodView.addFoodView();
    case 'add-souvenir-link':
      return addSouvenirsView.addSouvenirsView();
    case 'add-show-link':
      return addShowsView.addShowsView();
    case 'update-show-link':
      return updateShowsView.updateShowView(arg);
    case 'update-staff-link':
      return updateStaffView.updateStaffView(arg);
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
  $('body').on('click', '.add-food', (e) => {
    viewHelper('add-food-link', e.currentTarget.id);
  });
  $('body').on('click', '.add-souvenir', (e) => {
    viewHelper('add-souvenir-link', e.currentTarget.id);
  });
  $('body').on('click', '.add-show', (e) => {
    viewHelper('add-show-link', e.currentTarget.id);
  });
  $('body').on('click', '.add-staff', (e) => {
    viewHelper('add-staff-link', e.currentTarget.id);
  });
  $('body').on('click', '.update-show', (e) => {
    viewHelper('update-show-link', e.currentTarget.id);
  });
  $('body').on('click', '.update-staff', (e) => {
    viewHelper('update-staff-link', e.currentTarget.id);
  });
};

export default { viewListener };
