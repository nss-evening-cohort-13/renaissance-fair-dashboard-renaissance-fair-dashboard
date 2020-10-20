const buildEventCard = (eventObject) => {
  const domString = `<div class="card m-2" id="${eventObject.firebaseKey}" style="width: 18rem;" id="${eventObject.firebaseKey}">
  <div class="card-body" id="${eventObject.firebaseKey}">
    <h5 class="card-title" id="${eventObject.firebaseKey}">${eventObject.name}</h5>
    </div>
    <div class="body" id="${eventObject.firebaseKey}">
      <div>
        <img class="image" id="${eventObject.firebaseKey}" src="${eventObject.image}" alt="${eventObject.name}">
      </div>
      <p class="card-info" id="${eventObject.firebaseKey}">Date: ${eventObject.date}</p> 
    </div>
  </div>`;

  return domString;
};

export default { buildEventCard };
