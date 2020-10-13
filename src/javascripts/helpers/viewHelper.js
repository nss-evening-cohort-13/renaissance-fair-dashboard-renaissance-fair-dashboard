import showsView from '../components/views/showsView';
import staffView from '../components/views/staffView';
import souvenirsView from '../components/views/souvenirsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'souvenirs-link':
      return souvenirsView.souvenirsView();
    case 'shows-link':
      return showsView.showsView();
    case 'staff-link':
      return staffView.staffView();
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
};

export default { viewListener };
