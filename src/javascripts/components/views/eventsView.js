import eventData from '../../helpers/data/eventData';

const eventsView = () => {
  $('#app').html('<h2>Hello Events View Linked</h2>');
  eventData.getAllEvents();
};

export default { eventsView };
