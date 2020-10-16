import showData from '../../helpers/data/showsData';
import form from '../forms/updateShowsForm';

const updateShowView = (firebaseKey) => {
  $('#app').html(
    '<div id="update-show-form">The form is supposed to go here</div>'
  );
  showData.getSingleShow(firebaseKey).then((response) => {
    form.updateShowForm(response);
  });
};

export default { updateShowView };
