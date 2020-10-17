import staffData from '../../helpers/data/staffData';

const updateStaffForm = (staffObject) => {
  $('#update-staff-form').html(`
  <h2>Update Your Staff!</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" value="${staffObject.name}" placeholder="Example: Count ">
    </div>
    <div class="form-group">
      <label for="time">Role</label>
      <input type="text" class="form-control" value="${staffObject.role}" id="role" placeholder="Example: That guy that takes the trash out">
    </div>
    <div class="form-group">
      <label for="image">Image</label>
      <input type="text" class="form-control" id="image" value="${staffObject.image}" placeholder="https://">
    </div>
    <button id="update-staff-btn" type="submit" class="update-btn btn btn-info"><i class="fas fa-plus-circle"></i> Update Staff</button>
  </form>
  `);
  $('#update-staff-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
      image: $('#image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html('<div class="alert alert-danger" role="alert">Please complete all fields</div>');
    } else {
      $('#error-message').html('');

      staffData.updateStaff(staffObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html('<div class="alert alert-success" role="alert">Your Crappy Staff Member Was Updated!</div>');

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));
    }
  });
};

export default { updateStaffForm };
