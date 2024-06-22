import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import {
  hideLoader,
  imagesTemplate,
  refs,
  showError,
  showLoader,
} from './js/render-functions';

let gallery = new SimpleLightbox('.list-item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 200,
});

let page = 1;
let userInput = '';

refs.formEl.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
  e.preventDefault();
  refs.listEl.innerHTML = '';
  userInput = refs.inputEl.value.trim();
  if (userInput === '') {
    return;
  }

  showLoader();
  try {
    const hits = await fetchImages(userInput, page);
    if (hits.length === 0) {
      throw new Error();
    }
    const markup = imagesTemplate(hits);
    refs.listEl.innerHTML = markup;
    gallery.refresh();
    hideLoader();
  } catch (err) {
    showError();
    hideLoader();
  }
  page++;
  refs.formEl.reset();
}
