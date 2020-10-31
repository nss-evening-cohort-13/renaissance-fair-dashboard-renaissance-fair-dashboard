import eventData from '../../helpers/data/eventData';
import card from '../cards/eventCard';
import chart from '../charts/allEventsChart';

const eventsView = () => {
  $('#app').html('');
  $('#add-button').html(
    `<div id="add-event">
        <a href='#' class="add-event btn btn-primary btn-lg"><i class="fas fa-plus-circle"></i> Add Event</a>
    </div>`
  );
  $('#app').html(`
  <div id="eventCards"></div>
  <div id="allEventsChartDiv"></div>`);
  chart.makeChart();
  eventData.getAllEvents().then((response) => {
    if (response.length) {
      response.forEach((event) => {
        $('#eventCards').append(card.buildEventCard(event));
      });
    } else {
      $('#eventCards').html('<div>NO EVENTS</div>');
    }
  });
};

export default { eventsView };
