import types from "../actions/types"

export default function(state = [], action) {
  switch (action.type) {
    case types.SEARCH_MOVIES :
    return {
      ...state,
        searchTerm: action.payload.searchTerm,
        movies: action.payload.results,
        searchDetails: {
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results
      }
    }
    case types.ADD_FAVORITES :
    let movieID = action.payload;
    let favorites = state.favoriteMovies || [];
    (favorites.indexOf(movieID) !== -1) ?
      favorites.splice(favorites.indexOf(movieID), 1) : favorites.push(movieID)
    return {
      ...state,
      favoriteMovies: favorites
    }
    case types.MOVIE_DETAILS :
    return {
      ...state,
      currentMovie: action.payload
    }
    case types.CHANGE_SEARCHTERM :
    return {
      ...state,
      searchTerm: action.payload
    }

    default:
      return state;
  }
}
