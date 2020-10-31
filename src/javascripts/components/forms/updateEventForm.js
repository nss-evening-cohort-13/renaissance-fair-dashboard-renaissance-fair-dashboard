import eventData from '../../helpers/data/eventData';
import eventView from '../views/eventsView';

const updateEventForm = (eventObject) => {
  $('#update-event-form').html(`<div id="update-form">
    <h2 class="form-title">Update Event</h2>
    <div id="success-message"></div>
    <div id="error-message"></div>
    <div id="input-group-event">
      <div class="form-group">
        <label class="eventFormTitles" for="eventName">Event Name</label>
        <input type="text" class="form-control" id="eventName" value="${eventObject.name}" placeholder="Event Name">
      </div>
      <div class="form-group">
        <label class="eventFormTitles" for="eventDate">Event Date</label>
        <input type="text" class="form-control" id="eventDate" value="${eventObject.date}" placeholder="mm/dd/yyyy">
      </div>
      <div class="form-group">
        <label class="eventFormTitles" for="eventImage">Event Image</label>
        <input type="text" class="form-control" id="eventImage" value="${eventObject.image}" placeholder="https://">
      </div>
      <button id="updateEventBtn" type="button" class="btn"></i>Update Event</button>
    </div>
  <div>`);
  $('#updateEventBtn').on('click', (e) => {
    e.preventDefault();

    const newEventObject = {
      name: $('#eventName').val() || false,
      date: $('#eventDate').val() || false,
      image: $('#eventImage').val() || false,
    };
    if (Object.values(newEventObject).includes(false)) {
      $('#error-message').html(
        '<div class="alert" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      eventData.updateEvent(eventObject.firebaseKey, newEventObject)
        .then(() => {
          $('#success-message').html('<div class="alert-success" role="alert">Your Event Was Updated!</div>');
          setTimeout(() => {
            eventView.eventsView();
          }, 3000);
        }).catch((error) => console.warn(error));
    }
  });
};

export default { updateEventForm };
