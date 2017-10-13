import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addFavorites , getMovie} from '../../actions'
import Poster from './Poster'
import Details from './Details'
import Trailer from './Trailer'
import Reviews from './Reviews'

class MovieDetails extends Component {

  constructor(props){
    super(props)
    const movieId = this.props.match.params.movieID
    this.getMovie(movieId)
  }

  getMovie(movieId) {
    return this.props.getMovie(movieId)
  }

  render() {
    const cont = (this.props.reducers.search.currentMovie) ?

      <div className="row">
        <div className="col m6 s12 poster">
          <Poster poster={this.props.reducers.search.currentMovie.movie.poster_path}/>
          <Trailer videos={this.props.reducers.search.currentMovie.videos} />
        </div>
        <div className="col m6 s12">
        <Details movie={this.props.reducers.search.currentMovie.movie}
          credits={this.props.reducers.search.currentMovie.credits} />
        </div>

        <div className="col s12">
          <h3 >Reviews</h3>
            <Reviews reviews={this.props.reducers.search.currentMovie.reviews}/>
        </div>
      </div>
    : 'Loading'
    return (
      <div>
        <div className="row">
          <div className="input-field col m6 s12">
              <Link to="/" className="waves-effect waves-light btn pink">
              <i className="material-icons left">arrow_back</i>Back
            </Link>
          </div>
        </div>
         {cont}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, {addFavorites , getMovie})(MovieDetails)
