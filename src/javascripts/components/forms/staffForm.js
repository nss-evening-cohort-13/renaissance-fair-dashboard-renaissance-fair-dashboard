import staffData from '../../helpers/data/staffData';

const staffForm = () => {
  $('#staff-form').html(
    `<h2>Add a Staff Member</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Example: Jim Bean">
            </div>
            <div class="form-group">
              <label for="role">Role</label>
              <input type="text" class="form-control" id="role" placeholder="Example: Manager">
            </div>
            <div class="form-group">
              <label for="image">Image Link</label>
              <input type="text" class="form-control" id="image" placeholder="https://">
            </div>
            <button id="add-staff-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Staff</button>
          </form>
          `
  );
  $('#add-staff-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
      image: $('#image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      staffData
        .addStaff(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Staff Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#sucess-message').html('');
      }, 100);
      $('#name').val('');
      $('#role').val('');
      $('#image').val('');
    }
  });
};

export default { staffForm };
