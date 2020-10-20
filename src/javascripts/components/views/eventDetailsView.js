import eventData from '../../helpers/data/eventData';
import eventFood from '../../helpers/data/event_food';

const eventDetailsView = (eventFirebaseKey) => {
  eventData.getSingleEvent(eventFirebaseKey).then((response) => {
    console.warn(response);
    if (response) {
      $('#app').html(`<div id="event-details-view">
                        <h2>${response.name} Details</h2>
                        <p>${response.date}</p>
                        <div id="eventFood" class="event-category-details">
                          <h4 class="event-category-title">Food</h4>
                        </div>
                        <div id="eventShows" class="event-category-details">
                          <h4 "event-category-title">Shows</h4>
                        </div>
                        <div id="eventSouvenirs" class="event-category-details">
                          <h4 "event-category-title">Souvenirs</h4>
                        </div>
                        <div id="eventStaff" class="event-category-details">
                          <h4 "event-category-title">Staff</h4>
                        </div>
                        <div id="eventChart"></div>
                      </div>
      `);
      response.food.forEach((item) => {
        eventFood.getEventFood(item)
          .then((foodObject) => {
            $('#eventFood').append(`<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`);
          });
      });
      response.show.forEach((item) => {
        $('#eventShows').append(`<div>${item}</div>`);
      });
      response.souvenir.forEach((item) => {
        $('#eventSouvenirs').append(`<div>${item}</div>`);
      });
      response.staff.forEach((item) => {
        $('#eventStaff').append(`<div>${item}</div>`);
      });
    } else {
      $('#app').html('<h2>NO EVENT DETAILS</h2>');
    }
  });
};

export default { eventDetailsView };
