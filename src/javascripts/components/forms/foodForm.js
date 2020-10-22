import foodData from '../../helpers/data/foodData';

const foodForm = () => {
  $('#food-form').html(
    `<h2>Add a Food Item</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Example: Hog tossing">
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" min="0" class="form-control" id="price" placeholder="Example: 1">
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="form-group">
              <label for="image">Image Link</label>
              <input type="text" class="form-control" id="image" placeholder="https://">
            </div>
            <button id="add-food-btn" type="submit" class="add-btn btn btn-info"><i class="fas fa-plus-circle"></i> Add food</button>
          </form>
          `
  );
  $('#add-food-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      price: $('#price').val() || false,
      image: $('#image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      foodData
        .addFood(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Food Was Added!</div>'
          );
          setTimeout(() => {
            $('#sucess-message').html('');
          }, 100);
        }).catch((error) => console.warn(error));
      $('#name').val('');
      $('#price').val('');
      $('#image').val('');
    }
  });
};

export default { foodForm };
