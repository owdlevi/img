import movieReducer from '../reducers/movieReducer';
import types from '../actions/types';

describe('testing the reducers', () => {
    it('should return an empty state', () => {
        let action = {
            type: "",
            payload: ""
        }
        expect(movieReducer({}, action)).toEqual({});
    });

    it('should return the new state with favoriteMovie ', () => {
        let favoriteMovie = 123;
        let state = {}
        let action = {
            type: types.ADD_FAVORITES,
            payload: favoriteMovie
        }
        const resultState = movieReducer(state, action);
        expect(resultState).toHaveProperty('favoriteMovies',  [123] );
    });

    it('should return the new state with currentMovie ', () => {
        let currentMovie = {
          movieTitle: 'Movie'
        };
        let state = {}
        let action = {
            type: types.MOVIE_DETAILS,
            payload: currentMovie
        }
        const resultState = movieReducer(state, action);
        expect(resultState).toHaveProperty('currentMovie',currentMovie);
    });

    it('should return the new state with search Results ', () => {
        let result = {
          searchTerm: 'searchTerm',
          movies: ['Movies'],
          searchDetails: {
            page: 1,
            total_pages: 2,
            total_results: 22
        }
        }
        let payload = {
          searchTerm: 'searchTerm',
          results: ['Movies'],
          page: 1,
          total_pages: 2,
          total_results: 22
        }
        let state = {}
        let action = {
            type: types.SEARCH_MOVIES,
            payload: payload
        }
        const resultState = movieReducer(state, action);
        expect(resultState).toEqual(result);
    });

    it('should return the new state with new SearchTerm ', () => {
        let searchTerm = 'New Movie'
        let state = {}
        let action = {
            type: types.CHANGE_SEARCHTERM,
            payload: searchTerm
        }
        const resultState = movieReducer(state, action);
        expect(resultState).toHaveProperty('searchTerm',searchTerm);
    });

})
