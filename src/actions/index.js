import axios from 'axios'
import types from './types'
import { API_KEY,API_URL } from '../keys'

export const searchMovie = (searchTerm) => async dispatch => {
  const API = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}`
  const res = await axios.get(API)
  res.data.searchTerm = searchTerm
  dispatch({ type: types.SEARCH_MOVIES, payload: res.data })
};

export const handleChange = (searchTerm) => dispatch => {
  dispatch({ type: types.CHANGE_SEARCHTERM, payload: searchTerm })
};

export const addFavorites = (movieID) => dispatch => {
  dispatch({ type: types.ADD_FAVORITES, payload: movieID })
};

export const viewMovie = (movieID) => dispatch => {
  dispatch({ type: types.ADD_FAVORITES, payload: movieID })
};

export const getMovie = (movieID) => async dispatch =>{
  const API = `${API_URL}movie/${movieID}?api_key=${API_KEY}`
  const res = await axios.get(API)
  let movie = { movie: res.data }

  const API_CREDITS = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`
  const resCredits = await axios.get(API_CREDITS)
  movie.credits = resCredits.data

  const API_VIDEOS = `${API_URL}movie/${movieID}/videos?api_key=${API_KEY}`
  const resVideos = await axios.get(API_VIDEOS)
  movie.videos = resVideos.data

  const API_REVIEWS = `${API_URL}movie/${movieID}/reviews?api_key=${API_KEY}`
  const resReviews = await axios.get(API_REVIEWS)
  movie.reviews = resReviews.data

  dispatch({ type: types.MOVIE_DETAILS, payload: movie })
};
