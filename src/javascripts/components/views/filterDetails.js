import foodData from '../../helpers/data/foodData';
import eventFood from '../../helpers/data/event_food';
import showData from '../../helpers/data/showsData';
import eventShows from '../../helpers/data/event_shows';

const filterByCategory = () => {
  $('#dropdownContainer').html(`
        <div class="dropdown" id="filter-dropdown">
            <h2>Filter Event Details</h2>
            <div id="success-message"></div>
            <div id="error-message"></div>
            <div>
                <div class="form-group row">
                    <label for="board">Category</label>
                    <select class="form-control" id="category">
                        <option value="">Select a Category</option>
                        <option value="food">Food</option>
                        <option value="show">Show</option>
                        <option value="souvenir">Souvenir</option>
                        <option value="staff">Staff</option>
                        <option value="all">Show All</option>
                    </select>
                </div>
                <button id="filterByCategoryBtn" type="button" class="btn btn-warning filter-btn">Filter</button>
            </div>
        </div>`);

  $('body').on('click', '#filterByCategoryBtn', (e) => {
    e.stopImmediatePropagation();
    if ($('#category').val() === 'food') {
      $('#error-message').html('');
      $('#eventFood').css({ display: 'block' });
      $('#eventStaff').css({ display: 'none' });
      $('#eventShows').css({ display: 'none' });
      $('#eventSouvenirs').css({ display: 'none' });
    } else if ($('#category').val() === 'show') {
      $('#error-message').html('');
      $('#eventFood').css({ display: 'none' });
      $('#eventStaff').css({ display: 'none' });
      $('#eventShows').css({ display: 'block' });
      $('#eventSouvenirs').css({ display: 'none' });
    } else if ($('#category').val() === 'souvenir') {
      $('#error-message').html('');
      $('#eventFood').css({ display: 'none' });
      $('#eventStaff').css({ display: 'none' });
      $('#eventShows').css({ display: 'none' });
      $('#eventSouvenirs').css({ display: 'block' });
    } else if ($('#category').val() === 'staff') {
      $('#error-message').html('');
      $('#eventFood').css({ display: 'none' });
      $('#eventStaff').css({ display: 'block' });
      $('#eventShows').css({ display: 'none' });
      $('#eventSouvenirs').css({ display: 'none' });
    } else if ($('#category').val() === 'all') {
      $('#error-message').html('');
      $('#eventFood').css({ display: 'block' });
      $('#eventStaff').css({ display: 'block' });
      $('#eventShows').css({ display: 'block' });
      $('#eventSouvenirs').css({ display: 'block' });
    } else if ($('#category').val() === '') {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please select a category</div>'
      );
    }
  });
};

const filterByPrice = (eventFirebaseKey) => {
  $('#filterByPrice').html(`
        <div class="dropdown" id="filterByPriceDropdown">
            <div id="error-message"></>
            <div>
                <div class="form-group row">
                    <label for="board">Price Range</label>
                    <select class="form-control" id="priceRange">
                        <option value="">Select a Price Range</option>
                        <option value="5">$5-$50</option>
                        <option value="51">$51-$100</option>
                        <option value="101">$101-$150</option>
                        <option value="151">$151-$200</option>
                        <option value="201">$201+</option>
                        <option value="all">Show All price Ranges</option>
                    </select>
                </div>
                <button id="filterByPricebtn" type="button" class="btn btn-warning filter-btn">Filter</button>
            </div>
        </div>`);

  // button click to filter items by price
  $('body').on('click', '#filterByPricebtn', (e) => {
    // clear HTML to reprint items in conditional
    $('#foodLineItems').html('');
    $('#foodTotalCost').html('');
    $('#showLineItems').html('');
    $('#showTotalCost').html('');
    e.stopImmediatePropagation();
    // get event food to target event food array
    eventFood.getEventFood(eventFirebaseKey).then((foodArray) => {
      let foodTotal = 0;
      // run for each loop through food array to determine if food price fits the conditional
      foodArray.forEach((food) => {
        foodData.getSingleFoodItem(food.foodUid).then((foodObject) => {
          if ($('#priceRange').val() === '5' && foodObject.price < 51) {
            $('#foodLineItems').append(
              `<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`
            );
            foodTotal += parseInt(foodObject.price, 10);
            $('#foodTotalCost').html(`${foodTotal}`);
          } else if ($('#priceRange').val() === '51' && foodObject.price > 50 && foodObject.price < 101) {
            $('#foodLineItems').append(
              `<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`
            );
            foodTotal += parseInt(foodObject.price, 10);
            $('#foodTotalCost').html(`${foodTotal}`);
          } else if ($('#priceRange').val() === '101' && foodObject.price > 100 && foodObject.price < 151) {
            $('#foodLineItems').append(
              `<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`
            );
            foodTotal += parseInt(foodObject.price, 10);
            $('#foodTotalCost').html(`${foodTotal}`);
          } else if ($('#priceRange').val() === '151' && foodObject.price > 150 && foodObject.price < 201) {
            $('#foodLineItems').append(
              `<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`
            );
            foodTotal += parseInt(foodObject.price, 10);
            $('#foodTotalCost').html(`${foodTotal}`);
          } else if ($('#priceRange').val() === '201' && foodObject.price > 200) {
            $('#foodLineItems').append(
              `<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`
            );
            foodTotal += parseInt(foodObject.price, 10);
            $('#foodTotalCost').html(`${foodTotal}`);
          } else if ($('#priceRange').val() === 'all') {
            $('#foodLineItems').append(
              `<div class="line-item"><div>${foodObject.name}</div><div>${foodObject.price}</div></div>`
            );
            foodTotal += parseInt(foodObject.price, 10);
            $('#foodTotalCost').html(`${foodTotal}`);
          } else {
            foodTotal = 0;
            $('#foodTotalCost').html(`${foodTotal}`);
          }
        });
      });
    });
    // get event shows to target event show array
    eventShows.getEventShows(eventFirebaseKey)
      .then((showsArray) => {
        let showsTotal = 0;
        // run for each loop through show array to determine if show price fits the conditional
        showsArray.forEach((show) => {
          showData.getSingleShow(show.showUid).then((showObject) => {
            if ($('#priceRange').val() === '5' && showObject.price < 51) {
              $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
              showsTotal += showObject.price;
              $('#showTotalCost').html(`${showsTotal}`);
            } else if ($('#priceRange').val() === '51' && showObject.price > 50 && showObject.price < 101) {
              $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
              showsTotal += showObject.price;
              $('#showTotalCost').html(`${showsTotal}`);
            } else if ($('#priceRange').val() === '101' && showObject.price > 100 && showObject.price < 151) {
              $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
              showsTotal += showObject.price;
              $('#showTotalCost').html(`${showsTotal}`);
            } else if ($('#priceRange').val() === '151' && showObject.price > 150 && showObject.price < 201) {
              $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
              showsTotal += showObject.price;
              $('#showTotalCost').html(`${showsTotal}`);
            } else if ($('#priceRange').val() === '201' && showObject.price > 200) {
              $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
              showsTotal += showObject.price;
              $('#showTotalCost').html(`${showsTotal}`);
            } else if ($('#priceRange').val() === 'all') {
              $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
              showsTotal += showObject.price;
              $('#showTotalCost').html(`${showsTotal}`);
            } else {
              showsTotal = 0;
              $('#showTotalCost').html(`${showsTotal}`);
            }
          });
        });
      });
    // get event souvenirs to target event souvenirs array
    // eventSouvenirs.getEventSouvenirs(eventFirebaseKey)
    //   .then((showsArray) => {
    //     let showsTotal = 0;
    //     // run for each loop through show array to determine if show price fits the conditional
    //     showsArray.forEach((show) => {
    //       showData.getSingleShow(show.showUid).then((showObject) => {
    //         if ($('#priceRange').val() === '5' && showObject.price < 51) {
    //           $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
    //           showsTotal += parseInt(showObject.price, 10);
    //           $('#showTotalCost').html(`${showsTotal}`);
    //         } else if ($('#priceRange').val() === '51' && showObject.price > 50 && showObject.price < 101) {
    //           $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
    //           showsTotal += parseInt(showObject.price, 10);
    //           $('#showTotalCost').html(`${showsTotal}`);
    //         } else if ($('#priceRange').val() === '101' && showObject.price > 100 && showObject.price < 151) {
    //           $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
    //           showsTotal += parseInt(showObject.price, 10);
    //           $('#showTotalCost').html(`${showsTotal}`);
    //         } else if ($('#priceRange').val() === '151' && showObject.price > 150 && showObject.price < 201) {
    //           $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
    //           showsTotal += parseInt(showObject.price, 10);
    //           $('#showTotalCost').html(`${showsTotal}`);
    //         } else if ($('#priceRange').val() === '201' && showObject.price > 200) {
    //           $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
    //           showsTotal += parseInt(showObject.price, 10);
    //           $('#showTotalCost').html(`${showsTotal}`);
    //         } else if ($('#priceRange').val() === 'all') {
    //           $('#showLineItems').append(`<div class="line-item"><div>${showObject.name}</div><div>${showObject.price}</div></div>`);
    //           showsTotal += parseInt(showObject.price, 10);
    //           $('#showTotalCost').html(`${showsTotal}`);
    //         } else {
    //           showsTotal = 0;
    //           $('#showTotalCost').html(`${showsTotal}`);
    //         }
    //       });
    //     });
    //   });
  });
};

export default { filterByCategory, filterByPrice };
