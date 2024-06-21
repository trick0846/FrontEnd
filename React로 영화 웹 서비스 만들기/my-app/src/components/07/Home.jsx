import React, { useState, useEffect } from 'react'
import Movie from './Movie'

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // 첫번째 방법 - fecth
  // useEffect(() => {
  //   fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'      
  //   ).then((res) => res.json()
  //   ).then((json) => {
  //     setMovies(json.data.movies);
  //     setLoading(false);
  //   })
  // },[])
  // console.log(movies)

  // 두번째 방법
  const getMovies = async() => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  },[]);

  console.log(movies);

  return(
    <div>
      <h3>Movie List</h3>
      <p>You can search {movies.length} movies</p>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div >
          {/* {movies.map((movie) => <Movie movie={movie}/>)} */}
          {movies.map((movie) => (
            <Movie
              title={movie.title} 
              summary={movie.summary} 
              img={movie.medium_cover_image} 
              genres={movie.genres}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieApp