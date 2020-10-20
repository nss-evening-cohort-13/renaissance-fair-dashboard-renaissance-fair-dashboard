import eventData from '../../helpers/data/eventData';

const eventDetailsView = (eventFirebaseKey) => {
  eventData.getSingleEvent().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.foodMaker(item));
      });
    } else {
      $('#app').append('<h2>NO EVENT DETAILS</h2>');
    }
  });
};

export default { eventDetailsView };
