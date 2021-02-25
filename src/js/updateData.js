import card from '../templates/card.hbs';
import refs from '../js/refs';


function updateData(data) {
  const markup = card(data);
  refs.ulGallery.insertAdjacentHTML('beforeend', markup);
   window.scrollTo({
     top:
       document.documentElement.clientHeight +
       document.documentElement.scrollTop - 95 ,
     behavior: 'smooth',
   });
}

export default updateData;