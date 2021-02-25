import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';


import debounce from 'lodash.debounce';
import { notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';


import imgServise from './js/img-service';
import updateData from './js/updateData'
import refs from './js/refs';


refs.inputForm.addEventListener('input', debounce(event => checkOfValue(event), 500));

function checkOfValue(event) {
  imgServise.query = event.target.value;
  imgServise.resetPage();
  refs.ulGallery.innerHTML = '';
  
  if (imgServise.query.length <= 1) {
    return;
  } else if (imgServise.query.length === 2) {
    refs.btnLoadMore.classList.add('is-hidden');
    const myNotice = notice({
      text: 'Please, specify a more precise search word!',
    });
  } else
    fetchImages();
}

refs.btnLoadMore.addEventListener('click', () => { 
   imgServise.fetchImages().then(data => {
     updateData(data);
     window.scrollTo({
       top:
         document.documentElement.clientHeight +
         document.documentElement.scrollTop -
         90,
       behavior: 'smooth',
     });
   });
});

function fetchImages() {
  imgServise
    .fetchImages()
    .then(data => {
      updateData(data);
    });

  refs.btnLoadMore.classList.remove('is-hidden');
 
}




