import eventData from '../../helpers/data/eventData';
import eventFood from '../../helpers/data/event_food';
import eventShows from '../../helpers/data/event_shows';
import eventSouvenirs from '../../helpers/data/event_souvenirs';
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
      eventFood.getEventFood(eventFirebaseKey)
        .then((foodArray) => {
          let foodTotal = 0;
          foodArray.forEach((food) => {
            $('#foodLineItems').append(`<div class="line-item"><div>${food.name}</div><div>${food.price}</div></div>`);
            foodTotal += food.price;
          });
          $('#foodTotalCost').html(`${foodTotal}`);
        });
      eventShows.getEventShows(eventFirebaseKey)
        .then((showsArray) => {
          let showsTotal = 0;
          showsArray.forEach((show) => {
            $('#showLineItems').append(`<div class="line-item"><div>${show.name}</div><div>${show.price}</div></div>`);
            showsTotal += show.price;
          });
          $('#showTotalCost').html(`${showsTotal}`);
        });
      eventSouvenirs.getEventSouvenirs(eventFirebaseKey)
        .then((souvenirsArray) => {
          let souvenirsTotal = 0;
          souvenirsArray.forEach((souvenir) => {
            $('#souvenirLineItems').append(`<div class="line-item"><div>${souvenir.name}</div><div>${souvenir.price}</div></div>`);
            souvenirsTotal += souvenir.price;
          });
          $('#souvenirTotalCost').html(`${souvenirsTotal}`);
        });
      eventStaff.getEventStaff(eventFirebaseKey)
        .then((staffArray) => {
          let staffTotal = 0;
          staffArray.forEach((staffMember) => {
            $('#staffLineItems').append(`<div class="line-item"><div>${staffMember.name}</div><div>${staffMember.price}</div></div>`);
            staffTotal += staffMember.price;
          });
          $('#staffTotalCost').html(`${staffTotal}`);
        });
    } else {
      $('#app').html('<h2>NO EVENT DETAILS</h2>');
    }
  });
};

export default { eventDetailsView };
