import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addFavorites , viewMovie} from '../../actions'
import { Link } from 'react-router-dom'

class MovieItem extends Component {
  addFavorites(movieId) {
    this.props.addFavorites(movieId)
  }
  viewMovie(movieId) {
    this.props.viewMovie(movieId)
  }

  render() {
    const movie = this.props.movie || []
    const favoriteMovies = this.props.reducers.search.favoriteMovies || []
    let posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    let iconClass = (favoriteMovies.indexOf(movie.id) === -1)
      ? `favorite_border`
      : `favorite`
    return (
      <div className="col s12 m12">
        <div className="card" >
          <div className="card-image">
            <Link to={`/movie/${movie.id}`}>
            <img src={posterPath} alt={movie.title} onClick={() => this.viewMovie(movie.id)} />
          </Link>
            <span className="card-title" onClick={() => this.viewMovie(movie.id)}>{movie.title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.addFavorites(movie.id)}>
              <i className="material-icons">{iconClass}</i>
            </a>
          </div>
          <div className="card-content" onClick={() => this.viewMovie(movie.id)}>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {addFavorites , viewMovie})(MovieItem)
