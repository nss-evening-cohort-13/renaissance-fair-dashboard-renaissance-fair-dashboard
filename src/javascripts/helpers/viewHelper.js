import foodView from '../components/views/foodView';
import showsView from '../components/views/showsView';
import staffView from '../components/views/staffView';
import souvenirsView from '../components/views/souvenirsView';
import addSouvenirsView from '../components/views/addSouvenirsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'food-link':
      $('#add-button-souvenirs').html('');
      return foodView.foodView();
    case 'souvenirs-link':
      return souvenirsView.souvenirsView();
    case 'shows-link':
      $('#add-button-souvenirs').html('');
      return showsView.showsView();
    case 'staff-link':
      $('#add-button-souvenirs').html('');
      return staffView.staffView();
    case 'add-souvenir-link':
      return addSouvenirsView.addSouvenirsView();
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
  $('body').on('click', '.add-souvenir', (e) => {
    viewHelper('add-souvenir-link', e.currentTarget.id);
  });
};

export default { viewListener };
