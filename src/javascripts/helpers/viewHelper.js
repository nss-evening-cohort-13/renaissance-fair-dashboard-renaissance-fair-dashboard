import foodView from '../components/views/foodView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'food-link':
      return foodView.foodView();
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
