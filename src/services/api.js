import axios from 'axios';

export const fetchImages = (
  query = '',
  page = 1,
  key = '14486490-d7d4c83ed36c7fb757022cf96',
) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=20`,
  );
};

export const someFunction = () => {};
