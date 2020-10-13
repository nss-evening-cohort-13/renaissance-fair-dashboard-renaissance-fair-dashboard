const staffMaker = (staffObject) => {
  const domString = `<div class="card m-2" style="width: 15rem;" id="${staffObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${staffObject.name}</h5>
    </div>
    <div class="card-body">
    <div class="image">
      <img src="${staffObject.image}" alt="${staffObject.name}">
    </div>
    <p class="card-info">Role: ${staffObject.role}</p>
    <a href='#' id="${staffObject.firebaseKey}"
    <div class="hide-buttons
    class="update-souvenir btn btn-info update-btn"><i class="far fa-edit"></i> Update Staff</a>
    <a href="#" id="${staffObject.firebaseKey}" class="btn btn-danger delete-souvenir delete-btn">Delete Crappy Staff</a>
  </div>
</div>`;

  return domString;
};

export default { staffMaker };
