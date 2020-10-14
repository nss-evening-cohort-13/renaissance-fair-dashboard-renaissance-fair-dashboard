import card from '../cards/foodCard';
import foodData from '../../helpers/data/foodData';

const foodView = () => {
  foodData.getAllFood().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.foodMaker(item));
      });
    } else {
      $('#app').append('<h2>NO FOOD</h2>');
    }
  });
};

export default { foodView };
