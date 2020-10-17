import form from '../forms/updateStaffForm';
import staffData from '../../helpers/data/staffData';

const updateStaffView = (staffFirebaseKey) => {
  $('#app').html('<div id="update-staff-form"></div>');

  staffData.getSingleStaff(staffFirebaseKey).then((response) => {
    form.updateStaffForm(response);
  });
};

export default { updateStaffView };
