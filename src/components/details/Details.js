import React from 'react'

const Details = (props) => {
  const genres = props.movie.genres.map(genre =>{
    return <div key={genre.id} className="chip">{genre.name}</div>
  })

  const castDisplay = props.credits.cast.map( credit => {
    let pic = `https://image.tmdb.org/t/p/w45/${credit.profile_path}`
    let profilePic = (credit.profile_path) ? <img src={pic} alt={credit.name} /> : ''
    return (
      <div key={credit.id} className="chip">
        {profilePic}
        {credit.name}
      </div>
    )
  })

  const crewDisplay = props.credits.crew.map( crew => {
    let pic = `https://image.tmdb.org/t/p/w45/${crew.profile_path}`
    let profilePic = (crew.profile_path) ? <img src={pic} alt={crew.name} /> : ''
    let crewID = `crew${crew.credit_id}`
    return (
      <div key={crewID} className="chip">
        {profilePic}
        {crew.name}
      </div>
    )
  })

  return(
    <div >
      <h1 className="movietitle">{props.movie.title}</h1>
      <p>{props.movie.overview}</p>
      {genres}
      <h4>Cast</h4>
      {castDisplay}
      <h4>Crew</h4>
      {crewDisplay}
    </div>
  )
}

export default Details
