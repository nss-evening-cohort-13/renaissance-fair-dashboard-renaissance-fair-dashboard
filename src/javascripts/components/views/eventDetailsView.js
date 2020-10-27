import eventData from '../../helpers/data/eventData';
import eventFood from '../../helpers/data/event_food';
import eventShows from '../../helpers/data/event_shows';
import eventSouvenirs from '../../helpers/data/event_souvenirs';
import eventStaff from '../../helpers/data/event_staff';
import showData from '../../helpers/data/showsData';
import foodData from '../../helpers/data/foodData';
import souvenirsData from '../../helpers/data/souvenirsData';
import staffData from '../../helpers/data/staffData';
import filterDropdown from './filterDetails';

const eventDetailsView = (eventFirebaseKey) => {
  eventData.getSingleEvent(eventFirebaseKey).then((response) => {
    if (response) {
      $('#app').html(`<div id="event-details-view">
                        <h2>${response.name} Details</h2>
                        <p>${response.date}</p>
                        <div id="dropdownContainer"></div>
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
                        <div id="eventTotal"></div>
                        <div id="eventChart"></div>
                      </div>
      `);
      eventData.getAllEventObjects(eventFirebaseKey);
      filterDropdown.filterDropdown();

      eventFood.getEventFood(eventFirebaseKey).then((foodArray) => {
        foodArray.forEach((food) => {
          foodData.getSingleFoodItem(food.foodUid).then((foodObject) => {
            $('#foodLineItems').append(
              `<div class="line-item" id="${food.firebaseKey}">
                <div>${foodObject.name}<button id="${food.firebaseKey}" class="btn btn-outline delete-event-food icon-btn"><i id="food-icon" class="fas fa-times"></i></button></div>
                <div>${foodObject.price}</div>
              </div>`
            );
          });
        });
      });
      eventShows.getEventShows(eventFirebaseKey).then((showsArray) => {
        showsArray.forEach((show) => {
          showData.getSingleShow(show.showUid).then((showObject) => {
            $('#showLineItems').append(
              `<div class="line-item" id="${show.firebaseKey}">
                <div>${showObject.name}<button id="${show.firebaseKey}" class="btn btn-outline delete-event-show icon-btn"><i id="show-icon" class="fas fa-times"></i></button></div>
                <div>${showObject.price}</div>
              </div>`
            );
          });
        });
      });
      eventSouvenirs
        .getEventSouvenirs(eventFirebaseKey)
        .then((souvenirsArray) => {
          souvenirsArray.forEach((souvenir) => {
            souvenirsData
              .getSingleSouvenir(souvenir.souvenirUid)
              .then((souvenirsObject) => {
                $('#souvenirLineItems').append(
                  `<div class="line-item" id="${souvenir.firebaseKey}">
                <div>${souvenirsObject.name}<button id="${souvenir.firebaseKey}" class="btn btn-outline delete-event-souvenir icon-btn"><i id="souvenir-icon" class="fas fa-times"></i></button></div>
                <div>${souvenirsObject.price}</div>
              </div>`
                );
              });
          });
        });
      eventStaff.getEventStaff(eventFirebaseKey).then((staffArray) => {
        staffArray.forEach((staff) => {
          staffData.getSingleStaff(staff.staffUid).then((staffObject) => {
            $('#staffLineItems').append(`
              <div class="line-item" id="${staff.firebaseKey}">
                <div>${staffObject.name}<button id="${staff.firebaseKey}" class="btn btn-outline delete-event-staff icon-btn"><i id="staff-icon" class="fas fa-times"></i></button></div>
                <div>${staffObject.price}</div>
              </div>`);
          });
        });
      });
      Promise.all([
        eventFood.foodTotalPrices(eventFirebaseKey),
        eventShows.showsTotalPrices(eventFirebaseKey),
        eventSouvenirs.souvenirsTotalPrices(eventFirebaseKey),
        eventStaff.staffTotalPrices(eventFirebaseKey),
      ]).then((values) => {
        $('#foodTotalCost').html(`${values[0]}`);
        $('#showTotalCost').html(`${values[1]}`);
        $('#souvenirTotalCost').html(`${values[2]}`);
        $('#staffTotalCost').html(`${values[3]}`);
        const eventTotal = values.reduce((a, b) => a + b);
        $('#eventTotal').html(
          `<h2 id="eventTotalBanner"> The Total Cost is ${eventTotal}</h2>`
        );
      });
    } else {
      $('#app').html('<h2>NO EVENT DETAILS</h2>');
    }
  });
  $('body').on('click', '.delete-event-food', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.line-item#${firebaseKey}`).remove();
    eventFood.deleteFoodOfEvent(firebaseKey);
  });
  $('body').on('click', '.delete-event-show', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.line-item#${firebaseKey}`).remove();
    eventShows.deleteShowsOfEvent(firebaseKey);
  });
  $('body').on('click', '.delete-event-souvenir', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.line-item#${firebaseKey}`).remove();
    eventSouvenirs.deleteSouvenirsOfEvent(firebaseKey);
  });
  $('body').on('click', '.delete-event-staff', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.line-item#${firebaseKey}`).remove();
    eventStaff.deleteStaffOfEvent(firebaseKey);
  });
};

export default { eventDetailsView };
