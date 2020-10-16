import showData from '../../helpers/data/showsData';

const updateShowForm = (showObject) => {
  console.warn(showObject);
  $('#update-show-form').html(`
      <h2>Update your show!</h2>
      <div id="success-message"></div>
      <form>
        <div id="error-message"></div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" value="${showObject.name}" placeholder="Example: Flaming sword juggling">
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input type="text" class="form-control" value="${showObject.time}" id="time" placeholder="Example: 5pm">
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input type="text" class="form-control" id="image" value="${showObject.image}" placeholder="https://">
        </div>
        <button id="update-show-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Show</button>
      </form>
  `);
  $('#update-show-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      time: $('#time').val() || false,
      image: $('#image').val() || false,
    };
    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      showData
        .updateShow(showObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Show Was Updated!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#succes-message').html('');
      }, 3000);
    }
  });
};
export default { updateShowForm };
