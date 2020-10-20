import staffData from '../../helpers/data/staffData';
import souvenirData from '../../helpers/data/souvenirsData';
import showsData from '../../helpers/data/showsData';
import foodData from '../../helpers/data/foodData';
import eventData from '../../helpers/data/eventData';
import eventView from '../views/eventsView';

const addEventForm = () => {
  $('#events-form').html(`<div id="add-event-form">
    <h2 class="form-title">Add Event</h2>
    <div id="success-message"></div>
    <div id="error-message"></div>
    <div id="input-group-event">
      <div class="form-group">
        <label for="eventName">Event Name</label>
        <input type="text" class="form-control" id="eventName" placeholder="Event Name">
      </div>
      <div class="form-group">
        <label for="eventName">Event Date</label>
        <input type="text" class="form-control" id="eventDate" placeholder="mm/dd/yyyy">
      </div>
      <div class="form-group">
        <label for="eventName">Event Image</label>
        <input type="text" class="form-control" id="eventImage" placeholder="https://">
      </div>
      <div class="form-group">
        <label for="foodSelection">Select Food</label>
        <select multiple class="form-control" id="foodSelection">
        </select>
      </div>
      <div class="form-group">
        <label for="showSelection">Select Shows</label>
        <select multiple class="form-control" id="showSelection">
        </select>
      </div>
      <div class="form-group">
        <label for="staffSelection">Select Staff</label>
        <select multiple class="form-control" id="staffSelection">
        </select>
      </div>
      <div class="form-group">
       <label for="souvenirSelection">Select Souvenirs</label>
       <select multiple class="form-control" id="souvenirSelection">
       </select>
     </div>

      <button id="submitEventBtn" type="button" class="btn btn-success"></i>Add Event</button>
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
  showsData.getShows().then((response) => {
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
    const eventObject = {
      name: $('#eventName').val() || false,
      date: $('#eventDate').val() || false,
      image: $('#eventImage').val() || false,
      food: $('#foodSelection').val() || false,
      staff: $('#staffSelection').val() || false,
      show: $('#showSelection').val() || false,
      souvenir: $('#souvenirSelection').val() || false,
    };
    if (
      Object.values(eventObject).includes(false) || eventObject.food.length === 0 || eventObject.staff.length === 0 || eventObject.show.length === 0 || eventObject.souvenir.length === 0
    ) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      eventData
        .addEvent(eventObject)
        .then(() => {
          $('#success-message').html(
            '<div class="alert" role="alert">Your Event Was Added!</div>'
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
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
