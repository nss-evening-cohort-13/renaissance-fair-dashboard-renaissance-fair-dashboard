import form from '../forms/souvenirsForm';

const addSouvenirsView = () => {
  $('#app').html('<div id="souvenir-form">Put souvenir form here</div>');
  form.souvenirForm();
};

export default { addSouvenirsView };
