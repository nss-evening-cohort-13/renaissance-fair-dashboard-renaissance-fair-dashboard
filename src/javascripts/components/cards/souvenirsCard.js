const souvenirMaker = (souvenirObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${souvenirObject.firebaseKey}">
                      <div class="card-body">
                        <h5 class="card-title">${souvenirObject.name}</h5>
                        </div>
                        <div class="card-body">
                        <div>
                          <img class="image" src="${souvenirObject.image}" alt="${souvenirObject.name}">
                        </div>
                          <p class="card-info">Price: ${souvenirObject.price}</p> 
                        <div>
                          <a href='#' id="${souvenirObject.firebaseKey}"
                            class="update-souvenir btn btn-info crud-btn"><i class="far fa-edit"></i> Update Souvenir</a>
                          <a href="#" id="${souvenirObject.firebaseKey}" class="btn btn-danger delete-souvenir crud-btn">Delete Souvenir</a>
                        </div>
                      </div>
                    </div>`;
  return domString;
};

export default { souvenirMaker };
