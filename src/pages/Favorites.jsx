import React from 'react'
import '../css/Favorite.css'
import { useMovieContext } from '../contexts/MovieContext'; 
import MovieCard from '../components/MovieCard';

function Favorites() {
  const {favorites} = useMovieContext();

  return (
    favorites.length > 0 ? (
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className='movies-grid'>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    ) : (
      <div className='favorites-empty'>
        <h2>No favorites yet!</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
      </div>
    )
  );
}

export default Favorites