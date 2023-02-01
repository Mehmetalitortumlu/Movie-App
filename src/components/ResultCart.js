import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCart = ({ movie }) => {
    const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } = useContext(GlobalContext);

    const storedMovieWatched = watched.find((mov) => mov.id === movie.id)
    const storedMovie = watchlist.find((mov) => mov.id === movie.id) ? true : storedMovieWatched ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {
                    movie.poster_path ?
                        (
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`} />
                        ) :
                        (<div className="filler-poster"></div>)
                }
            </div>
            <div className="info">
                <div className="header">
                    <h3 className='title'>{movie.title}</h3>
                    <h4 className='release-date'>
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                    <h4 className='release-date'>
                        IMDB: <b> {movie.vote_average ? movie.vote_average : "-"} </b>
                    </h4>
                </div>
                <div className="controls">
                    <button disabled={storedMovie} onClick={() => addMovieToWatchlist(movie)} className='btn'>  Add to Watchlist </button>
                    <button disabled={storedMovieWatched} onClick={() => addMovieToWatched(movie)} className='btn'>  Add to Watchlist </button>
                </div>
            </div>
        </div>
    )
}

export default ResultCart
