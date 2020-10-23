import eventData from '../../helpers/data/eventData';
import eventFood from '../../helpers/data/event_food';
import eventShows from '../../helpers/data/event_shows';
import eventSouvenirs from '../../helpers/data/event_souvenirs';
import eventStaff from '../../helpers/data/event_staff';

const buildEventCard = (eventObject) => {
  const domString = `<div class="card event-card m-2 event-details" id="${eventObject.firebaseKey}" style="width: 18rem;" id="${eventObject.firebaseKey}">
  <div class="card-body" id="${eventObject.firebaseKey}">
    <h5 class="card-title" id="${eventObject.firebaseKey}">${eventObject.name}</h5>
    </div>
    <div class="body" id="${eventObject.firebaseKey}">
      <div>
        <img class="image" id="${eventObject.firebaseKey}" src="${eventObject.image}" alt="${eventObject.name}">
      </div>
      <p class="card-info" id="${eventObject.firebaseKey}">Date: ${eventObject.date}</p> 
    </div>
    <button id="${eventObject.firebaseKey}" class="btn btn-outline delete-event icon-btn"><i id="event-icon" class="fas fa-times"></i></button>
  </div>`;
  $('body').on('click', '.delete-event', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.event-card#${firebaseKey}`).remove();
    eventData.deleteEvent(firebaseKey);
    eventFood.getEventFood(firebaseKey).then((response) => {
      response.forEach((item) => {
        eventFood.deleteFoodOfEvent(item.firebaseKey);
      });
    });
    eventShows.getEventShows(firebaseKey).then((response) => {
      response.forEach((item) => {
        eventShows.deleteShowsOfEvent(item.firebaseKey);
      });
    });
    eventSouvenirs.getEventSouvenirs(firebaseKey).then((response) => {
      response.forEach((item) => {
        eventSouvenirs.deleteSouvenirsOfEvent(item.firebaseKey);
      });
    });
    eventStaff.getEventStaff(firebaseKey).then((response) => {
      response.forEach((item) => {
        eventStaff.deleteStaffOfEvent(item.firebaseKey);
      });
    });
  });

  return domString;
};

export default { buildEventCard };
