import form from '../forms/addEventsForm';

const addEventsView = () => {
  $('#app').html('<div id="events-form">Put events form here</div>');
  form.addEventForm();
};

export default { addEventsView };
