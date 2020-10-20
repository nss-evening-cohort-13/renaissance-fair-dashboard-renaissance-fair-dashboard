import eventData from '../../helpers/data/eventData';
import card from '../cards/eventCard';

const eventsView = () => {
  eventData.getAllEvents().then((response) => {
    if (response.length) {
      response.forEach((event) => {
        $('#app').append(card.buildEventCard(event));
      });
    } else {
      $('#app').html('<div>NO EVENTS</div>');
    }
  });
};

export default { eventsView };
