import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  formEl: document.querySelector('.search-box'),
  inputEl: document.querySelector('#search-image'),
  searchBtn: document.querySelector('.search-btn'),
  listEl: document.querySelector('.image-list'),
  loader: document.querySelector('.load-box'),
  loadMoreBtn: document.querySelector('.load-btn'),
};

export let page = 1;

function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="list-item">
    <div class="box-image">
      <a href="${largeImageURL}" class="list-link">
        <img src="${webformatURL}" alt="${tags}" title="${tags}">
      </a>
    </div>
    <div class="stats-box">
      <div class="likes-box">
        <span class="text">Likes</span>
        <span class="value">${likes}</span>
      </div>
      <div class="views-box">
        <span class="text">Views</span>
        <span class="value">${views}</span>
      </div>
      <div class="comments-box">
        <span class="text">Comments</span>
        <span class="value">${comments}</span>
      </div>
      <div class="downloads-box">
        <span class="text">Downloads</span>
        <span class="value">${downloads}</span>
      </div>
    </div>
  </li>`;
}

export function imagesTemplate(imagesArr) {
  return imagesArr.map(imageTemplate).join('');
}

export function showError() {
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
  });
}

export function showLoader() {
  refs.loader.classList.remove('load-box');
}
export function hideLoader() {
  refs.loader.classList.add('load-box');
}

export function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}

export function ScrollByClick() {
  const liEl = refs.listEl.children[0];
  const height = liEl.getBoundingClientRect().height * 2;
  window.scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
