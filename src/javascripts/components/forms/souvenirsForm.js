import souvenirData from '../../helpers/data/souvenirsData';

const souvenirForm = () => {
  $('#souvenir-form').html(`
  <h2>Add a Souvenir</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Example: Jester Hat">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" id="price" placeholder="Example: 100">
    </div>
    <div class="form-group">
      <label for="image">Image URL</label>
      <input type="text" class="form-control" id="image" placeholder="Example: https://...">
    </div>
    <button id="add-souvenir-btn" type="submit" class="add-btn btn btn-info"><i class="fas fa-plus-circle"></i> Add Souvenir</button>
  </form>
  `);

  $('#add-souvenir-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      price: $('#price').val() || false,
      image: $('#image').val() || false,
      name: $('#name').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      souvenirData.addSouvenir(data).then(() => {
        $('#success-message').html(
          '<div class="alert alert-success" role="alert">Your Souvenir Was Added!</div>'
        );
        setTimeout(() => {
          $('#success-message').html('');
        }, 2000);
      }).catch((error) => console.warn(error));
      $('#price').val('');
      $('#image').val('');
      $('#name').val('');
    }
  });
};

export default { souvenirForm };
