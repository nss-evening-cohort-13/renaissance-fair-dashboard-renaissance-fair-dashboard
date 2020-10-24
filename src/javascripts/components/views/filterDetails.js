// import eventFood from '../../helpers/data/event_food';
// import foodData from '../../helpers/data/foodData';

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

const filterByPrice = () => {
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
  $('body').on('click', '#filterByPricebtn', (e) => {
    console.warn('clicked');
    e.stopImmediatePropagation();
    // if ($('#priceRange').val() === '5') {
    // }
  });
};

export default { filterByCategory, filterByPrice };
