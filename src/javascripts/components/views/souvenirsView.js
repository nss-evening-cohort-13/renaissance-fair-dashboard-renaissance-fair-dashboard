import souvenirsData from '../../helpers/data/souvenirsData';
import card from '../cards/souvenirsCard';

const souvenirsView = () => {
  souvenirsData.getAllSouvenirs().then((response) => {
    if (response.length) {
      response.forEach((souvenir) => {
        $('#app').append(card.souvenirMaker(souvenir));
      });
    } else {
      $('#app').append('<h2>NO SOUVENIR</h2>');
    }
  });
};

export default { souvenirsView };
