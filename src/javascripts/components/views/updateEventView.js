import eventData from '../../helpers/data/eventData';
import form from '../forms/updateEventForm';

const updateEventView = (eventFirebaseKey) => {
  $('#app').html('<div id="update-event-form">Put update event form here</div>');
  eventData.getSingleEvent(eventFirebaseKey).then((response) => {
    form.updateEventForm(response);
  });
};

export default { updateEventView };
