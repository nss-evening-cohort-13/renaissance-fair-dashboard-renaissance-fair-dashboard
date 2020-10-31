import staffData from '../../helpers/data/staffData';
import souvenirData from '../../helpers/data/souvenirsData';
import showsData from '../../helpers/data/showsData';
import foodData from '../../helpers/data/foodData';
import eventData from '../../helpers/data/eventData';
import eventView from '../views/eventsView';
import foodOfEvent from '../../helpers/data/event_food';
import showOfEvent from '../../helpers/data/event_shows';
import souvenirOfEvent from '../../helpers/data/event_souvenirs';
import staffOfEvent from '../../helpers/data/event_staff';

const addEventForm = () => {
  $('#events-form').html(`<div id="add-event-form">
    <h2 class="form-title" id="eventFormTitle" >Add Event</h2>
    <div id="success-message2"></div>
    <div id="error-message"></div>
    <div id="input-group-event">
      <div class="form-group">
        <label for="eventName" class="eventFormTitles">Event Name</label>
        <input type="text" class="form-control" id="eventName" placeholder="Event Name">
      </div>
      <div class="form-group">
        <label for="eventName" class="eventFormTitles">Event Date</label>
        <input type="text" class="form-control" id="eventDate" placeholder="mm/dd/yyyy">
      </div>
      <div class="form-group">
        <label class="eventFormTitles" for="eventName">Event Image</label>
        <input type="text" class="form-control" id="eventImage" placeholder="https://">
      </div>
      <div class="selector-group">
      <div class="form-group eventSelector">
        <label for="foodSelection" class="eventFormTitles" >Select Food</label>
        <select multiple class="form-control" id="foodSelection">
        </select>
      </div>
      <div class="form-group eventSelector">
        <label for="showSelection" class="eventFormTitles" >Select Shows</label>
        <select multiple class="form-control" id="showSelection">
        </select>
      </div>
      <div class="form-group eventSelector">
        <label for="staffSelection" class="eventFormTitles">Select Staff</label>
        <select multiple class="form-control" id="staffSelection">
        </select>
      </div>
      <div class="form-group eventSelector">
        <label for="souvenirSelection" class="eventFormTitles">Select Souvenirs</label>
        <select multiple class="form-control" id="souvenirSelection">
        </select>
      </div>
      </div>

      <button id="submitEventBtn" type="button" class="btn"></i>Add Event</button>
    </div>
  <div>`);

  foodData.getAllFood().then((response) => {
    $('#foodSelection').html('');
    response.forEach((food) => {
      $('#foodSelection').append(
        `<option value="${food.firebaseKey}">${food.name}</option>`
      );
    });
  });
  showsData.getAllShows().then((response) => {
    $('#showSelection').html('');
    response.forEach((show) => {
      $('#showSelection').append(
        `<option value="${show.firebaseKey}">${show.name}</option>`
      );
    });
  });
  staffData.getAllStaff().then((response) => {
    $('#staffSelection').html('');
    response.forEach((staff) => {
      $('#staffSelection').append(
        `<option value="${staff.firebaseKey}">${staff.name}</option>`
      );
    });
  });
  souvenirData.getAllSouvenirs().then((response) => {
    $('#souvenirSelection').html('');
    response.forEach((souvenir) => {
      $('#souvenirSelection').append(
        `<option value="${souvenir.firebaseKey}">${souvenir.name}</option>`
      );
    });
  });
  $('#submitEventBtn').on('click', (e) => {
    e.preventDefault();
    const eventFoodArray = $('#foodSelection').val();
    const eventShowArray = $('#showSelection').val();
    const eventSouvenirArray = $('#souvenirSelection').val();
    const eventStaffArray = $('#staffSelection').val();

    const eventObject = {
      name: $('#eventName').val() || false,
      date: $('#eventDate').val() || false,
      image: $('#eventImage').val() || false,
    };
    if (Object.values(eventObject).includes(false)) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#success-message2').html(
        '<div class="alert-success" role="alert">Your Event Was Added! BOOM</div>'
      );
      $('#error-message').html('');
      eventData
        .addEvent(eventObject)
        .then((response2) => {
          eventFoodArray.forEach((item) => {
            const foodObject = {
              foodUid: item,
              eventUid: response2,
            };
            foodOfEvent.addFoodOfEvents(foodObject);
          });
          eventShowArray.forEach((item2) => {
            const showObject = {
              showUid: item2,
              eventUid: response2,
            };
            showOfEvent.addShowsOfEvents(showObject);
          });
          eventSouvenirArray.forEach((item3) => {
            const souvenirObject = {
              souvenirUid: item3,
              eventUid: response2,
            };
            souvenirOfEvent.addSouvenirsOfEvents(souvenirObject);
          });
          eventStaffArray.forEach((item4) => {
            const staffObject = {
              staffUid: item4,
              eventUid: response2,
            };
            staffOfEvent.addStaffOfEvents(staffObject);
          });
        })
        .then(() => {
          setTimeout(() => {
            eventView.eventsView();
          }, 3000);
        });
    }
  });
};

export default { addEventForm };
