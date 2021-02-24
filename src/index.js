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
    refs.btnLoadMore.classList.add('is-hidden');
  } else if (imgServise.query.length === 2) {
    const myNotice = notice({
      text: 'Please, specify a more precise search word!',
    });
  } else {
    imgServise.fetchImages().then(updateData);
    refs.btnLoadMore.classList.remove('is-hidden');
  };
}

refs.btnLoadMore.addEventListener('click', () => {
  imgServise.fetchImages().then(updateData);
})




