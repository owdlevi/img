import React from 'react'

const Poster = (props) => {
  let posterPath = `https://image.tmdb.org/t/p/original/${props.poster}`
  return(
    <div >
      <img src={posterPath} alt="" />
    </div>
  )
}

export default Poster
