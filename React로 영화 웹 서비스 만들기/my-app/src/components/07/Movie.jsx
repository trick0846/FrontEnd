import React, {useState, useEffect} from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

// 여기에서 입력받는 순서와 다르게 적어도 알아서 인식해준다!
function Movie({title, summary, genres, img, id}) {

  return(
    <div style={{margin:"10px", padding:"10px", border:"1px solid black"}}>
      <img src={img} style={{width:"200px"}}></img>
      <h5>
        <Link to={`movie/${id}`}>
          Title : {title}
        </Link>
        </h5>
      <p>Summary : {summary}</p>
      <ul>
        {genres?.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  )

  Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
  }
}


export default Movie