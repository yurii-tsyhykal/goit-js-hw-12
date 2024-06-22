import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

export async function fetchImages(userInput, page) {
  const params = {
    q: userInput,
    page: page,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    key: '44394535-420bbb6d9539431cf03571547',
  };
  const response = await axios.get('/api/', { params });
  return response.data.hits;
}
