import eventData from '../../helpers/data/eventData';
import eventFood from '../../helpers/data/event_food';
import eventShow from '../../helpers/data/event_show';
import eventSouvenir from '../../helpers/data/event_souvenir';
import eventStaff from '../../helpers/data/event_staff';

const eventDetailsView = (eventFirebaseKey) => {
  eventData.getSingleEvent(eventFirebaseKey).then((response) => {
    if (response) {
      $('#app').html(`<div id="event-details-view">
                        <h2>${response.name} Details</h2>
                        <p>${response.date}</p>
                        <div id="eventFood" class="event-category-details">
                          <h4 class="event-category-title">Food</h4>
                          <div id="foodLineItems"></div>
                          <div class="line-item category-total"><div>Total</div><div id="foodTotalCost"></div></div>
                        </div>
                        <div id="eventShows" class="event-category-details">
                          <h4 "event-category-title">Shows</h4>
                          <div id="showLineItems"></div>
                          <div class="line-item category-total"><div>Total</div><div id="showTotalCost"></div></div>
                        </div>
                        <div id="eventSouvenirs" class="event-category-details">
                          <h4 "event-category-title">Souvenirs</h4>
                          <div id="souvenirLineItems"></div>
                          <div class="line-item category-total"><div>Total</div><div id="souvenirTotalCost"></div></div>
                        </div>
                        <div id="eventStaff" class="event-category-details">
                          <h4 "event-category-title">Staff</h4>
                          <div id="staffLineItems"></div>
                          <div class="line-item category-total"><div>Total</div><div id="staffTotalCost"></div></div>
                        </div>
                        <div id="eventChart"></div>
                      </div>
      `);
      response.food.forEach((item) => {
        eventFood.getEventFood(item)
          .then((foodObject) => {
            $('#foodLineItems').append(`<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`);
          });
      });
      // console.warn(foodCosts);
      $('#foodTotalCost').html('$$$');
      response.show.forEach((item) => {
        eventShow.getEventShow(item)
          .then((showObject) => {
            $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
          });
      });
      $('#showTotalCost').html('$$$');
      response.souvenir.forEach((item) => {
        eventSouvenir.getEventSouvenir(item)
          .then((souvenirObject) => {
            $('#souvenirLineItems').append(`<div class="line-item"><div>${souvenirObject.name}</div><div>${souvenirObject.price}</div></div>`);
          });
      });
      $('#souvenirTotalCost').html('$$$');
      response.staff.forEach((item) => {
        eventStaff.getEventStaff(item)
          .then((staffMemberObject) => {
            $('#staffLineItems').append(`<div class="line-item"><div>${staffMemberObject.name}</div><div>${staffMemberObject.price}</div></div>`);
          });
      });
      $('#staffTotalCost').html('$$$');
    } else {
      $('#app').html('<h2>NO EVENT DETAILS</h2>');
    }
  });
};

export default { eventDetailsView };
