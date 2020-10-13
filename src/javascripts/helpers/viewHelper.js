import staffView from '../components/views/staffView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'souvenirs-link':
      return console.warn('souvenirs-link is good');
    default:
      return console.warn('nothing clicked');
    case 'staff-link':
      return staffView.staffView();
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
