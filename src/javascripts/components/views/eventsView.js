import eventData from '../../helpers/data/eventData';
import card from '../cards/eventCard';

const eventsView = () => {
  $('#add-button').html(
    `<div id="add-event">
       <a href='#'
       class="add-event btn btn-primary btn-lg"><i class="fas fa-plus-circle"></i> Add Event</a>
    </div>`
  );
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
