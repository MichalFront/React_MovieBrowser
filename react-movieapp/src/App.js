import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

// 18d3b0de

const API_URL = 'http://www.omdbapi.com?apikey=18d3b0de';

const movie1 = {
    "Title": "Shrek in the Swamp Karaoke Dance Party",
    "Year": "2001",
    "imdbID": "tt0307461",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTlmZjQzNmYtMjA1Ny00N2JkLWJhM2ItYTU3ODQ4Zjc2MWE1XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
}

const App = () => {

    const[movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Shrek');
    },[]);


    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
                ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>

                )
            }





        </div>
    );
}

export default App;