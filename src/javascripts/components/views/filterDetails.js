import eventData from '../../helpers/data/eventData';

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
    $('#filteredItems').html('');
    $('#eventTotalBanner').css({ display: 'none' });
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
      $('#eventTotalBanner').css({ display: 'block' });
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
    $('#filteredItems').html('');
    // display none for event detail divs while filtering by price
    $('#eventFood').css({ display: 'none' });
    $('#eventShows').css({ display: 'none' });
    $('#eventStaff').css({ display: 'none' });
    $('#eventSouvenirs').css({ display: 'none' });
    $('#eventTotalBanner').css({ display: 'none' });
    e.stopImmediatePropagation();
    eventData.getAllEventObjects(eventFirebaseKey).then((objectArray) => {
      objectArray.forEach((object) => {
        if ($('#priceRange').val() === '5' && object.price < 51) {
          $('#filteredItems').append(
            `<div class="line-item"><div>${object.name}</div><div>${object.price}</div></div>`
          );
        } else if ($('#priceRange').val() === '51' && object.price > 50 && object.price < 101) {
          $('#filteredItems').append(
            `<div class="line-item"><div>${object.name}</div><div>${object.price}</div></div>`
          );
        } else if ($('#priceRange').val() === '101' && object.price > 100 && object.price < 151) {
          $('#filteredItems').append(
            `<div class="line-item"><div>${object.name}</div><div>${object.price}</div></div>`
          );
        } else if ($('#priceRange').val() === '151' && object.price > 150 && object.price < 201) {
          $('#filteredItems').append(
            `<div class="line-item"><div>${object.name}</div><div>${object.price}</div></div>`
          );
        } else if ($('#priceRange').val() === '201' && object.price > 201) {
          $('#filteredItems').append(
            `<div class="line-item"><div>${object.name}</div><div>${object.price}</div></div>`
          );
        } else if ($('#priceRange').val() === 'all') {
          $('#filteredItems').html('');
          $('#eventFood').css({ display: 'block' });
          $('#eventShows').css({ display: 'block' });
          $('#eventStaff').css({ display: 'block' });
          $('#eventSouvenirs').css({ display: 'block' });
          $('#eventTotalBanner').css({ display: 'block' });
        } else if ($('#priceRange').val() === '') {
          $('#error-message').html(
            '<div class="alert alert-danger" role="alert">Please select a price range</div>'
          );
        }
      });
    });
  });
};

export default { filterByCategory, filterByPrice };
