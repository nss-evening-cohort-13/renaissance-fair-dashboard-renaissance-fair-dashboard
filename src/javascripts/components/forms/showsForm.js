import showsData from '../../helpers/data/showsData';

const showsForm = () => {
  $('#shows-form').html(
    `<h2>Add a Show</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Example: Hog tossing">
            </div>
            <div class="form-group">
              <label for="time">Time</label>
              <input type="text" class="form-control" id="time" placeholder="Example: 1pm">
            </div>
            <div class="form-group">
              <label for="image">Image Link</label>
              <input type="text" class="form-control" id="image" placeholder="https://">
            </div>
            <button id="add-show-btn" type="submit" class="add-btn btn btn-info"><i class="fas fa-plus-circle"></i> Add Show</button>
          </form>
          `
  );
  $('#add-show-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      time: $('#time').val() || false,
      image: $('#image').val() || false,
      price: 100
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      showsData
        .addShow(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Show Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#sucess-message').html('');
      }, 100);
      $('#name').val('');
      $('#time').val('');
      $('#image').val('');
    }
  });
};

export default { showsForm };
