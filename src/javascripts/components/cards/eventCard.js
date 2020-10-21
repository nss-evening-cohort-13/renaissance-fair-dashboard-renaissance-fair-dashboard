import eventData from '../../helpers/data/eventData';

const buildEventCard = (eventObject) => {
  const domString = `<div class="card event-card m-2" id="${eventObject.firebaseKey}" style="width: 18rem;" id="${eventObject.firebaseKey}">
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
  });

  return domString;
};

export default { buildEventCard };
