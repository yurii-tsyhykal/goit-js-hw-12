import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

export async function fetchImages(userInput, currentPage) {
  const params = {
    q: userInput,
    page: currentPage,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    key: '44394535-420bbb6d9539431cf03571547',
  };
  const response = await axios.get('/api/', { params });
  console.log(response);
  return response.data;
}
