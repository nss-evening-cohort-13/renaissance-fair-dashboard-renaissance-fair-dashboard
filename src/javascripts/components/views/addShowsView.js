import form from '../forms/showsForm';

const addShowsView = () => {
  $('#app').html('<div id="shows-form">Put shows form here</div>');
  form.showsForm();
};

export default { addShowsView };
