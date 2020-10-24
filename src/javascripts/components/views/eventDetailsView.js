import eventData from '../../helpers/data/eventData';
import eventFood from '../../helpers/data/event_food';
import eventShows from '../../helpers/data/event_shows';
import eventSouvenirs from '../../helpers/data/event_souvenirs';
import eventStaff from '../../helpers/data/event_staff';
import showData from '../../helpers/data/showsData';
import foodData from '../../helpers/data/foodData';
import souvenirsData from '../../helpers/data/souvenirsData';
import staffData from '../../helpers/data/staffData';

const eventDetailsView = (eventFirebaseKey) => {
  eventData.getSingleEvent(eventFirebaseKey).then((response) => {
    if (response) {
      $('#app').html(`<div id="event-details-view" class="event-details">
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
      eventFood.getEventFood(eventFirebaseKey).then((foodArray) => {
        let foodTotal = 0;
        foodArray.forEach((food) => {
          foodData.getSingleFoodItem(food.foodUid).then((foodObject) => {
            $('#foodLineItems').append(
              `<div class="line-item">
                <div>${foodObject.name}<button id="${food.firebaseKey}" class="btn btn-outline delete-food icon-btn"><i id="food-icon" class="fas fa-times"></i></button></div>
                <div>${foodObject.price}</div>
              </div>`
            );
            foodTotal += parseInt(foodObject.price, 10);
            $('#foodTotalCost').html(`${foodTotal}`);
          });
        });
      });
      eventShows.getEventShows(eventFirebaseKey).then((showsArray) => {
        let showsTotal = 0;
        showsArray.forEach((show) => {
          showData.getSingleShow(show.showUid).then((showObject) => {
            $('#showLineItems').append(
              `<div class="line-item">
                <div>${showObject.name}<button id="${showObject.uid}" class="btn btn-outline delete-show icon-btn"><i id="show-icon" class="fas fa-times"></i></button></div>
                <div>${showObject.price}</div>
              </div>`
            );
            showsTotal += parseInt(showObject.price, 10);
            $('#showTotalCost').html(`${showsTotal}`);
          });
        });
      });
      eventSouvenirs.getEventSouvenirs(eventFirebaseKey).then((souvenirsArray) => {
        let souvenirsTotal = 0;
        souvenirsArray.forEach((souvenir) => {
          souvenirsData.getSingleSouvenir(souvenir.souvenirUid).then((souvenirsObject) => {
            $('#souvenirLineItems').append(
              `<div class="line-item">
                <div>${souvenirsObject.name}<button id="${souvenirsObject.uid}" class="btn btn-outline delete-souvenir icon-btn"><i id="souvenir-icon" class="fas fa-times"></i></button></div>
                <div>${souvenirsObject.price}</div>
              </div>`
            );
            souvenirsTotal += parseInt(souvenirsObject.price, 10);
            $('#souvenirTotalCost').html(`${souvenirsTotal}`);
          });
        });
      });
      eventStaff.getEventStaff(eventFirebaseKey).then((staffArray) => {
        let staffTotal = 0;
        staffArray.forEach((staff) => {
          staffData.getSingleStaff(staff.staffUid).then((staffObject) => {
            $('#staffLineItems').append(`
              <div class="line-item">
                <div>${staffObject.name}<button id="${staffObject.uid}" class="btn btn-outline delete-staff icon-btn"><i id="staff-icon" class="fas fa-times"></i></button></div>
                <div>${staffObject.price}</div>
              </div>`);
            staffTotal += parseInt(staffObject.price, 10);
            $('#staffTotalCost').html(`${staffTotal}`);
          });
        });
      });
    } else {
      $('#app').html('<h2>NO EVENT DETAILS</h2>');
    }
  });
  $('body').on('click', '.delete-food', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    console.warn('clicked firebase key', firebaseKey);
    $(`.event-details#${firebaseKey}`).remove();
    eventFood.getEventFood(firebaseKey).then((response) => {
      console.warn('geteventfood', response);
      response.forEach((item) => {
        eventFood.deleteFoodOfEvent(item.firebaseKey);
      });
    });
  });
};

export default { eventDetailsView };
