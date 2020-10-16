import souvenirsData from '../../helpers/data/souvenirsData';
import form from '../forms/updateSouvenirsForm';

const updateSouvenirsView = (souvenirFirebaseKey) => {
  $('#app').html('<div id="update-souvenir-form"></div>');
  souvenirsData.getSingleSouvenir(souvenirFirebaseKey).then((response) => {
    form.updateSouvenirsForm(response);
  });
};

export default { updateSouvenirsView };
