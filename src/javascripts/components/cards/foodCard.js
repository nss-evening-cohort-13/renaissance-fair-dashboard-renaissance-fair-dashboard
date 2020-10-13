const foodMaker = (foodObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${foodObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${foodObject.name}</h5>
    </div>
    <div class="card-body">
    <div class="image">
      <img src="${foodObject.image}" alt="${foodObject.name}">
    </div>
    <p class="card-info">Price: ${foodObject.price}</p>
    <a href='#' id="${foodObject.firebaseKey}"
    class="update-food btn btn-info update-btn"><i class="far fa-edit"></i> Update food</a>
    <a href="#" id="${foodObject.firebaseKey}" class="btn btn-danger delete-food delete-btn">Delete food</a>
  </div>
</div>`;
  return domString;
};

export default { foodMaker };
