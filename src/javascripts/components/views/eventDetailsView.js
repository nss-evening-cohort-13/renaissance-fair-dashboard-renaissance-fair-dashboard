import eventData from '../../helpers/data/eventData';

const eventDetailsView = (eventFirebaseKey) => {
  eventData.getSingleEvent().then((response) => {
    if (response.length) {
      $('#app').html('<h2>Event Details</h2>');
      response.food.forEach((foodFiredbaseKey) => {
        get
      });
    } else {
      $('#app').append('<h2>NO EVENT DETAILS</h2>');
    }
  });
};

export default { eventDetailsView };
