import souvenirsData from '../../helpers/data/souvenirsData';
import card from '../cards/souvenirsCard';

const souvenirsView = () => {
  $('#image-header').html('<div> <img src="https://static.wixstatic.com/media/d67f1d_6d42ca34dde249a8b19c4c8ee2286825~mv2_d_2820_1225_s_2.jpg/v1/fill/w_1952,h_846,al_c,q_85,usm_0.66_1.00_0.01/d67f1d_6d42ca34dde249a8b19c4c8ee2286825~mv2_d_2820_1225_s_2.webp" height="350"> </div>');
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
