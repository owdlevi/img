import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchBar from '../search/SearchBar.js'
import MovieItem from './MovieItem'

class Dashboard extends Component {

  render() {
    const moviesList = this.props.reducers.search.movies || []
    const moviesListDisplay = (moviesList.length > 1)
      ? moviesList.map(movie => {
        return <MovieItem key={movie.id} movie={movie}/>
      })
      : 'Search for movies'
    return (
      <div className="container">
        <SearchBar/>
        <div className="row">
          {moviesListDisplay}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Dashboard)
