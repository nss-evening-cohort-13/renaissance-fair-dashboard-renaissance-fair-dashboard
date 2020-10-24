import foodView from '../components/views/foodView';
import showsView from '../components/views/showsView';
import staffView from '../components/views/staffView';
import souvenirsView from '../components/views/souvenirsView';
import eventsView from '../components/views/eventsView';
import addFoodView from '../components/views/addFoodView';
import addSouvenirsView from '../components/views/addSouvenirsView';
import addShowsView from '../components/views/addShowsView';
import addStaffView from '../components/views/addStaffView';
import updateSouvenirsView from '../components/views/updateSouvenirsView';
import updateShowsView from '../components/views/updateShowsView';
import updateStaffView from '../components/views/updateStaffView';
import updateFoodView from '../components/views/updateFoodView';
import addEventsView from '../components/views/addEventsView';
import eventDetailsView from '../components/views/eventDetailsView';
<<<<<<< HEAD
import filterDropdown from '../components/views/filterDetails';
=======
import updateEventView from '../components/views/updateEventView';
>>>>>>> development

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
    case 'events-link':
      return eventsView.eventsView();
    case 'add-staff-link':
      return addStaffView.addStaffView();
    case 'add-food-link':
      return addFoodView.addFoodView();
    case 'add-souvenir-link':
      return addSouvenirsView.addSouvenirsView();
    case 'add-show-link':
      return addShowsView.addShowsView();
    case 'update-souvenir-link':
      return updateSouvenirsView.updateSouvenirsView(arg);
    case 'update-show-link':
      return updateShowsView.updateShowView(arg);
    case 'update-staff-link':
      return updateStaffView.updateStaffView(arg);
    case 'update-food-link':
      return updateFoodView.updateFoodView(arg);
    case 'add-event-link':
      return addEventsView.addEventsView();
    case 'event-details-link':
      return eventDetailsView.eventDetailsView(arg);
    case 'update-event-link':
      return updateEventView.updateEventView(arg);
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
  $('body').on('click', '.update-souvenir', (e) => {
    const souvenirFirebaseKey = e.currentTarget.id;
    viewHelper('update-souvenir-link', souvenirFirebaseKey);
  });
  $('body').on('click', '.update-show', (e) => {
    viewHelper('update-show-link', e.currentTarget.id);
  });
  $('body').on('click', '.update-staff', (e) => {
    viewHelper('update-staff-link', e.currentTarget.id);
  });
  $('body').on('click', '.update-food', (e) => {
    viewHelper('update-food-link', e.currentTarget.id);
  });
  $('body').on('click', '.add-event', () => {
    viewHelper('add-event-link');
  });
  $('body').on('click', '.update-event', (e) => {
    viewHelper('update-event-link', e.currentTarget.id);
  });
  $('body').on('click', '.event-details', (e) => {
    viewHelper('event-details-link', e.currentTarget.id);
    filterDropdown.filterDropdown();
  });
};

export default { viewListener };
