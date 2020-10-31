import eventFood from '../../helpers/data/event_food';
import eventShows from '../../helpers/data/event_shows';
import eventSouvenirs from '../../helpers/data/event_souvenirs';
import eventStaff from '../../helpers/data/event_staff';
import showData from '../../helpers/data/showsData';
import foodData from '../../helpers/data/foodData';
import souvenirsData from '../../helpers/data/souvenirsData';
import staffData from '../../helpers/data/staffData';
import eventChart from '../charts/eventChart';

const allTheTotals = (eventFirebaseKey) => Promise.all([
  eventFood.foodTotalPrices(eventFirebaseKey),
  eventShows.showsTotalPrices(eventFirebaseKey),
  eventSouvenirs.souvenirsTotalPrices(eventFirebaseKey),
  eventStaff.staffTotalPrices(eventFirebaseKey),
]);

const foodModal = (eventFirebaseKey) => {
  $('#event-details-view')
    .append(`<div class="modal" id="addFoodModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Food To This Event</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="form-group eventSelector">
        <label for="foodSelectionModal">Select Food</label>
        <select multiple class="form-control" id="foodSelectionModal">
        </select>
      </div>
        </div>
        <div class="modal-footer">
          <button id="submitFood" type="button" class="btn save-modal-btn">Save changes</button>
          <button type="button" class="btn close-modal-btn" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`);
  foodData.getAllFood().then((response) => {
    $('#foodSelectionModal').html('');
    response.forEach((food) => {
      $('#foodSelectionModal').append(
        `<option value="${food.firebaseKey}">${food.name}</option>`
      );
    });
  });
  $('#submitFood').on('click', (e) => {
    e.preventDefault();
    const eventFoodArray = $('#foodSelectionModal').val();
    eventFoodArray.forEach((item) => {
      const foodObject = {
        foodUid: item,
        eventUid: eventFirebaseKey,
      };
      eventFood.addFoodOfEvents(foodObject);
    });
    setTimeout(() => {
      $('#addFoodModal').modal('hide');
      $('#foodLineItems').html('');
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
      allTheTotals(eventFirebaseKey).then((values) => {
        $('#foodTotalCost').html(`${values[0]}`);
        $('#showTotalCost').html(`${values[1]}`);
        $('#souvenirTotalCost').html(`${values[2]}`);
        $('#staffTotalCost').html(`${values[3]}`);
        const eventTotal = values.reduce((a, b) => a + b);
        $('#eventTotal').html(
          `<h2 id="eventTotalBanner"> The Total Cost is ${eventTotal}</h2>`
        );
        eventChart.makeChart(values);
      });
    }, 2000);
  });
};

const staffModal = (eventFirebaseKey) => {
  $('#event-details-view')
    .append(`<div class="modal" id="addStaffModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Staff to this Event</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="form-group eventSelector">
          <label for="staffSelectionModal">Select Staff</label>
          <select multiple class="form-control" id="staffSelectionModal">
          </select>
        </div>
          </div>
          <div class="modal-footer">
            <button id="submitStaff" type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`);
  staffData.getAllStaff().then((response) => {
    $('#staffSelectionModal').html('');
    response.forEach((staff) => {
      $('#staffSelectionModal').append(
        `<option value="${staff.firebaseKey}">${staff.name}</option>`
      );
    });
  });
  $('#submitStaff').on('click', (e) => {
    e.preventDefault();
    const eventStaffArray = $('#staffSelectionModal').val();
    eventStaffArray.forEach((item) => {
      const staffObject = {
        staffUid: item,
        eventUid: eventFirebaseKey,
      };
      eventStaff.addStaffOfEvents(staffObject);
    });
    setTimeout(() => {
      $('#addStaffModal').modal('hide');
      $('#staffLineItems').html('');
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
      allTheTotals(eventFirebaseKey).then((values) => {
        $('#foodTotalCost').html(`${values[0]}`);
        $('#showTotalCost').html(`${values[1]}`);
        $('#souvenirTotalCost').html(`${values[2]}`);
        $('#staffTotalCost').html(`${values[3]}`);
        const eventTotal = values.reduce((a, b) => a + b);
        $('#eventTotal').html(
          `<h2 id="eventTotalBanner"> The Total Cost is ${eventTotal}</h2>`
        );
        eventChart.makeChart(values);
      });
    }, 2000);
  });
};

const showsModal = (eventFirebaseKey) => {
  $('#event-details-view')
    .append(`<div class="modal" id="addShowsModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Shows to this Event</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div class="form-group eventSelector">
            <label for="showsSelectionModal">Select Shows</label>
            <select multiple class="form-control" id="showsSelectionModal">
            </select>
          </div>
            </div>
            <div class="modal-footer">
              <button id="submitShows" type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`);
  showData.getAllShows().then((response) => {
    $('#showsSelectionModal').html('');
    response.forEach((shows) => {
      $('#showsSelectionModal').append(
        `<option value="${shows.firebaseKey}">${shows.name}</option>`
      );
    });
  });
  $('#submitShows').on('click', (e) => {
    e.preventDefault();
    const eventShowsArray = $('#showsSelectionModal').val();
    eventShowsArray.forEach((item) => {
      const showsObject = {
        showUid: item,
        eventUid: eventFirebaseKey,
      };
      eventShows.addShowsOfEvents(showsObject);
    });
    setTimeout(() => {
      $('#addShowsModal').modal('hide');
      $('#showLineItems').html('');
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
      allTheTotals(eventFirebaseKey).then((values) => {
        $('#foodTotalCost').html(`${values[0]}`);
        $('#showTotalCost').html(`${values[1]}`);
        $('#souvenirTotalCost').html(`${values[2]}`);
        $('#staffTotalCost').html(`${values[3]}`);
        const eventTotal = values.reduce((a, b) => a + b);
        $('#eventTotal').html(
          `<h2 id="eventTotalBanner"> The Total Cost is ${eventTotal}</h2>`
        );
        eventChart.makeChart(values);
      });
    }, 2000);
  });
};

const souvenirsModal = (eventFirebaseKey) => {
  $('#event-details-view')
    .append(`<div class="modal" id="addSouvenirsModal" tabindex="-1" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Souvenirs to this Event</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <div class="form-group eventSelector">
              <label for="souvenirsSelectionModal">Select Souvenirs</label>
              <select multiple class="form-control" id="souvenirsSelectionModal">
              </select>
            </div>
              </div>
              <div class="modal-footer">
                <button id="submitSouvenirs" type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`);
  souvenirsData.getAllSouvenirs().then((response) => {
    $('#souvenirsSelectionModal').html('');
    response.forEach((souvenirs) => {
      $('#souvenirsSelectionModal').append(
        `<option value="${souvenirs.firebaseKey}">${souvenirs.name}</option>`
      );
    });
  });
  $('#submitSouvenirs').on('click', (e) => {
    e.preventDefault();
    const eventSouvenirsArray = $('#souvenirsSelectionModal').val();
    eventSouvenirsArray.forEach((item) => {
      const souvenirsObject = {
        souvenirUid: item,
        eventUid: eventFirebaseKey,
      };
      eventSouvenirs.addSouvenirsOfEvents(souvenirsObject);
    });
    setTimeout(() => {
      $('#addSouvenirsModal').modal('hide');
      $('#souvenirLineItems').html('');
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
      allTheTotals(eventFirebaseKey).then((values) => {
        $('#foodTotalCost').html(`${values[0]}`);
        $('#showTotalCost').html(`${values[1]}`);
        $('#souvenirTotalCost').html(`${values[2]}`);
        $('#staffTotalCost').html(`${values[3]}`);
        const eventTotal = values.reduce((a, b) => a + b);
        $('#eventTotal').html(
          `<h2 id="eventTotalBanner"> The Total Cost is ${eventTotal}</h2>`
        );
        eventChart.makeChart(values);
      });
    }, 2000);
  });
};

export default {
  foodModal,
  staffModal,
  showsModal,
  souvenirsModal,
};
