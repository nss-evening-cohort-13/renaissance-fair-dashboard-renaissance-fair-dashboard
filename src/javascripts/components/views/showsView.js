import showsData from '../../helpers/data/showsData';
import card from '../cards/showsCard';

const showsView = () => {
  showsData.getAllShows().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.showMaker(item));
      });
    } else {
      $('#app').append('<h2>NO SHOWS</h2>');
    }
  });
};

export default { showsView };
