import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

let gallery = new SimpleLightbox('.list-item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 200,
});

const refs = {
  formEl: document.querySelector('.search-box'),
  inputEl: document.querySelector('#search-image'),
  searchBtn: document.querySelector('.search-btn'),
  listEl: document.querySelector('.image-list'),
  loader: document.querySelector('.load-box'),
};

refs.formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  refs.listEl.innerHTML = '';

  const userInput = refs.inputEl.value.trim();
  if (userInput === '') {
    return;
  }

  showLoader();

  fetchImages(userInput)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ hits, ...obj }) => {
      if (hits.length === 0) {
        throw new Error();
      }
      const markup = imagesTemplate(hits);
      refs.listEl.innerHTML = markup;
      gallery.refresh();
    })
    .catch(err =>
      iziToast.error({
        theme: 'dark',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageSize: 16,
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        progressBarColor: '#b51b1b',
        maxWidth: 432,
      })
    )
    .finally(() => {
      hideLoader();
    });

  refs.formEl.reset();
}

function showLoader() {
  refs.loader.classList.remove('load-box');
}
function hideLoader() {
  refs.loader.classList.add('load-box');
}
