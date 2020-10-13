import card from '../cards/foodCard';
import foodData from '../../helpers/data/foodData';

const foodView = () => {
  foodData.getAllFood()
    .then((response) => {
      console.warn(response);
      response.forEach((item) => {
        $('#app').append(card.foodMaker(item));
      });
    });
};

export default { foodView };
