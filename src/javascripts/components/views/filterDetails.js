// import eventFood from '../../helpers/data/event_food';
// import foodData from '../../helpers/data/foodData';

const filterDropdown = (eventFirebaseKey) => {
  $('#dropdownContainer').html(`
        <div class="dropdown" id="filter-dropdown">
            <h2>Filter Event Details</h2>
            <div id="success-message"></div>
            <div>
                <div id="error-message"></div>
                <div class="form-group row">
                    <label for="board">Category</label>
                    <select class="form-control" id="category">
                        <option value="">Select a Category</option>
                        <option value="food">Food</option>
                        <option value="show">Show</option>
                        <option value="souvenir">Souvenir</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
                <button id="filter-btn" type="button" class="btn btn-warning dropdown-btn">Filter</button>
            </div>
        </div>`);

  $('body').on('click', '#filter-btn', (e) => {
    console.warn('event fbkey', eventFirebaseKey);
    e.stopImmediatePropagation();
    console.warn(e);
    console.warn($('#category').val());
    if ($('#category').val() === 'food') {
      $('#eventStaff').html('');
      $('#eventShows').html('');
      $('#eventSouvenirs').html('');
      // eventFood.getEventFood(eventFirebaseKey).then((foodArray) => {
      //   let foodTotal = 0;
      //   foodArray.forEach((food) => {
      //     foodData.getSingleFoodItem(food.foodUid).then((foodObject) => {
      //       $('#foodLineItems').append(
      //         `<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`
      //       );
      //       foodTotal += parseInt(foodObject.price, 10);
      //       $('#foodTotalCost').html(`${foodTotal}`);
      //     });
      //   });
      // });
    }
  });
  // const domSrting = `
  //       <div class="dropdown" id="filter-dropdown">
  //           <h2>Filter Event Details</h2>
  //           <div id="success-message"></div>
  //           <div>
  //               <div id="error-message"></div>
  //               <div class="form-group row">
  //                   <label for="board">Category</label>
  //                   <select class="form-control" id="category">
  //                       <option value="">Select a Category</option>
  //                       <option value="food">Food</option>
  //                       <option value="show">Show</option>
  //                       <option value="souvenir">Souvenir</option>
  //                       <option value="staff">Staff</option>
  //                   </select>
  //               </div>
  //               <button id="filter-btn" type="button" class="btn dropdown-btn">Filter</button>
  //           </div>
  //       </div>`;
  // return domSrting;
};

export default { filterDropdown };
