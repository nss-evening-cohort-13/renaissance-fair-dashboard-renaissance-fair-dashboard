// import eventFood from '../../helpers/data/event_food';
// import foodData from '../../helpers/data/foodData';

const filterDropdown = () => {
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
                <button id="filter-btn" type="button" class="btn btn-warning dropdown-btn">Filter</button>
            </div>
        </div>`);

  $('body').on('click', '#filter-btn', (e) => {
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

export default { filterDropdown };
