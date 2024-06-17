export function fetchImages(userInput) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const params = new URLSearchParams({
    key: '44394535-420bbb6d9539431cf03571547',
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}${END_POINT}/?${params.toString()}`;
  return fetch(url);
}
