import form from '../forms/staffForm';

const addStaffView = () => {
  $('#app').html('<div id="staff-form">Put staff form here</div>');
  form.staffForm();
};

export default { addStaffView };
