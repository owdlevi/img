import React from 'react'

const Reviews = (props) => {
  const reviewDisplay = (props.reviews.results.length) ?
    props.reviews.results.map(review => {
      let key = `review${review.id}`
        return <div key={key} className="collection-item"><h5>{review.author}</h5><p>{review.content}</p></div>
    })
  :
  <div className="collection-item">No Reviews for this movie</div>
  return(
    <div className="collection">

      {reviewDisplay}
    </div>
  )
}

export default Reviews
