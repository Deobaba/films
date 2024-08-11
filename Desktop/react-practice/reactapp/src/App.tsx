import { useEffect, useState } from "react"
import Movie from './components/Movie'
import './App.css'


interface movietype {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// 9c3864ec
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9c3864ec'
function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<movietype[]>([]);

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movie Search App</h1>
      <div className="search">
        <input
          type="text"
          value={search}
          placeholder="Search for a movie"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src='./assets/filternet.png'
          alt='search'
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
  
}

export default App
