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
