import staffData from '../../helpers/data/staffData';
import card from '../cards/staffCard';

const staffView = () => {
  staffData.getAllStaff().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.staffMaker(item));
      });
    } else {
      $('#app').append('<h2>No Staff</h2>');
    }
  });
};

export default { staffView };
