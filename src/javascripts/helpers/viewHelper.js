import souvenirsView from '../components/views/souvenirsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'souvenirs-link':
      return souvenirsView.souvenirsView();
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
