import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import {
  ScrollByClick,
  hideLoadMoreBtn,
  hideLoader,
  imagesTemplate,
  refs,
  showError,
  showLoadMoreBtn,
  showLoader,
} from './js/render-functions';
import iziToast from 'izitoast';

let gallery = new SimpleLightbox('.list-item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 200,
});

let page = 1;
let userInput = '';
let maxPage = 1;
const perPage = 15;

refs.formEl.addEventListener('submit', onSubmitForm);
refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);

async function onSubmitForm(e) {
  e.preventDefault();
  refs.listEl.innerHTML = '';
  page = 1;
  userInput = refs.inputEl.value.trim();
  if (userInput === '') {
    return;
  }

  showLoader();
  try {
    const data = await fetchImages(userInput, page);
    if (data.hits.length === 0) {
      throw new Error();
    }
    maxPage = Math.ceil(data.totalHits / perPage);
    const markup = imagesTemplate(data.hits);
    refs.listEl.innerHTML = markup;
    gallery.refresh();
    checkLoadPage();
    hideLoader();
  } catch (err) {
    hideLoadMoreBtn();
    showError();
    hideLoader();
  }
  refs.formEl.reset();
}

async function onClickLoadMoreBtn() {
  page++;
  showLoader();
  hideLoadMoreBtn();
  try {
    const data = await fetchImages(userInput, page);
    if (data.hits.length === 0) {
      throw new Error();
    }
    const markup = imagesTemplate(data.hits);
    refs.listEl.insertAdjacentHTML('beforeend', markup);
    gallery.refresh();
    ScrollByClick();
    hideLoader();
  } catch (err) {
    showError();
    hideLoader();
  }
  checkLoadPage();
}

function checkLoadPage() {
  if (page >= maxPage) {
    hideLoadMoreBtn();
    if (maxPage) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } else {
    showLoadMoreBtn();
  }
}
