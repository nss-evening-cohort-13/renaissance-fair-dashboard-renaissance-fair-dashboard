import souvenirsData from '../../helpers/data/souvenirsData';
import card from '../cards/souvenirsCard';

const souvenirsView = () => {
  $('#image-header').html('<div> <img src="https://lionhearthats.files.wordpress.com/2015/07/023.jpg" height="345"> </div>');
  souvenirsData.getAllSouvenirs().then((response) => {
    if (response.length) {
      response.forEach((souvenir) => {
        $('#app').append(card.souvenirMaker(souvenir));
      });
    } else {
      $('#app').append('<h2>NO SOUVENIRS</h2>');
    }
  });
};

export default { souvenirsView };
