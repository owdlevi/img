import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchMovie, handleChange} from '../../actions'

class SearchBar extends Component {

  searchMovie() {
    this.props.searchMovie(this.props.reducers.search.searchTerm)
  }

  handleChange(e) {
    this.props.handleChange(e.target.value)
  }

  handleSubmit(e) {
    this.props.searchMovie(this.props.reducers.search.searchTerm)
    e.preventDefault();
  }

  render() {
    let searchTerm = this.props.reducers.search.searchTerm || ''
    return (
      <div className="row">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="input-field col s10">
            <input placeholder="Search Movie" value={searchTerm} onChange={e => this.handleChange(e)} type="text"/>
          </div>
          <div className="input-field col s2">
            <button className="btn waves-effect waves-light pink" name="action" onClick={() => this.searchMovie()}>
              Search
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {searchMovie, handleChange})(SearchBar)
