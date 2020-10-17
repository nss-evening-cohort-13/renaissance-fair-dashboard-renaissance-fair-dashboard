import foodData from '../../helpers/data/foodData';

const updateFoodForm = (foodObject) => {
  $('#update-food-form').html(`
        <h2>Update/Modify Food Choices</h2>
        <div id="success-message"></div>
        <form>
          <div id="error-message"></div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" value="${foodObject.name}" placeholder="Example: Turkey Leg">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" value="${foodObject.price}" id="price" placeholder="Example: $5">
          </div>
          <div class="form-group">
            <label for="image">image</label>./3
            <input type="text" class="form-control" id="image" value="${foodObject.image}" placeholder="Add image URL here">
          </div>
          <button id="update-food-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Food Item</button>
        </form>
    `);
  $('#update-food-btn').on('click', (e) => {
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
      foodData.updateFood(foodObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Food Was Updated!</div>'
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        })
        .catch((error) => console.warn(error));
      $('#price').val('');
      $('#image').val('');
      $('#name').val('');
    }
  });
};

export default { updateFoodForm };
