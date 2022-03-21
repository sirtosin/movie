import React from 'react'
import './MovieList.css'
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
const MovieList = () => {
  const movies = useSelector(state => state.movies.movies);
console.log("movies-now ",movies)


  return (
      <div>
      <h2>Movies</h2>

      <div className="movie-list">
      

        {movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
          
       ) )}
        

      </div>
   
    </div>
  )
}

export default MovieList
