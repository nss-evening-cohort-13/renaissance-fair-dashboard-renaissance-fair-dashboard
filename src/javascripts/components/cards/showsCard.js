// import showsData from '../../helpers/data/showsData';

const showMaker = (showObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${showObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${showObject.name}</h5>
    </div>
    <div class="card-body">
    <div class="image">
      <img src="${showObject.image}" alt="${showObject.name}">
    </div>
    <p class="card-info">Time: ${showObject.time}</p>
    <a href='#' id="${showObject.firebaseKey}"
    class="update-show btn btn-info update-btn"><i class="far fa-edit"></i> Update Show</a>
    <a href="#" id="${showObject.firebaseKey}" class="btn btn-danger delete-show delete-btn">Delete Show</a>
  </div>
</div>`;
  return domString;
};

export default { showMaker };
