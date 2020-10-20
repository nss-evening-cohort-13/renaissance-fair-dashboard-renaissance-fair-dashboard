import eventData from '../../helpers/data/eventData';

const eventDetailsView = (eventFirebaseKey) => {
  eventData.getSingleEvent().then((response) => {
    if (response.length) {
      $('#app').append('<h2>Event Details</h2>');
      console.warn(eventFirebaseKey);
    } else {
      $('#app').append('<h2>NO EVENT DETAILS</h2>');
    }
  });
};

export default { eventDetailsView };
