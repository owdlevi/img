import React from 'react'
import YouTube from 'react-youtube'

const Trailer = (props) => {
  const opts = {
      height: '390',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
  let trailer = props.videos.results.map(video => {

    return (
     <YouTube
       key = {video.key}
       videoId = {video.key}
        opts = {opts}
     />
   )
  })
  return(
    <div>
      <h4>Trailer</h4>
    {trailer}
  </div>
  )
}

export default Trailer
