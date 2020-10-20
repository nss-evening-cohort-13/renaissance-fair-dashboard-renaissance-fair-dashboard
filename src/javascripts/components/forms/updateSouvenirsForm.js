import souvenirsData from '../../helpers/data/souvenirsData';

const updateSouvenirsForm = (souvenirObject) => {
  $('#update-souvenir-form').html(`
      <h2>Update a Souvenir</h2>
      <div id="success-message"></div>
      <form>
        <div id="error-message"></div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" value="${souvenirObject.name}" placeholder="Example: Knight's Helm">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="text" class="form-control" value="${souvenirObject.price}" id="price" placeholder="Example: 50">
        </div>
        <div class="form-group">
          <label for="image">Image URL</label>
          <input type="text" class="form-control" id="image" value="${souvenirObject.image}" placeholder="Example: https://...">
        </div>
        <button id="update-souvenir-btn" type="submit" class="update-btn btn btn-info"><i class="fas fa-plus-circle"></i> Update Souvenir</button>
      </form>
  `);

  $('#update-souvenir-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      image: $('#image').val() || false,
      price: $('#price').val() || false,
      name: $('#name').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      souvenirsData.updateSouvenir(souvenirObject.firebaseKey, data).then(() => {
        $('#success-message').html(
          '<div class="alert alert-success" role="alert">Your Souvenir Was Updated!</div>'
        );
        setTimeout(() => {
          $('#success-message').html('');
        }, 2000);
      }).catch((error) => console.warn(error));
    }
  });
};

export default { updateSouvenirsForm };
