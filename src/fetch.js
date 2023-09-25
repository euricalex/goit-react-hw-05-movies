import axios from 'axios';
const API_KEY = 'daca860db741facb25da0efbe03487a5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const response = await axios(`/movie/popular?api_key=${API_KEY}`);
  return response.data;
};


export const getMoviesByID = async id => {
  const response = await axios(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getReviews = async id => {
  const response = await axios(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};

export const getCast = async id => {
  const response = await axios(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};
export const getMovieByQuery = async query => {
  const response = await axios(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};
