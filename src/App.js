import './App.css';
import { useState } from 'react' ;
import MovieList  from './MovieList';
import Filter from './Filter';
function App() {
  const [movies, setMovies] = useState( [
    {
    title: "Lara Croft:Tomp RAIDER",
    duration:"100 min",
    date: "2001",
    rate: 5,
    genre: "Action",
    description:"Earth's hqkfjjkqfjkkjfhjdfhldhf",
    img:"https://www.movie-locations.com/movies/l/Lara-Croft-Ta-Prohm.jpg"
    },
    {
    title: "averagers",
    duration:"149 min",
    date: "2012",
    rate: 4,
    genre: "sci-fi",
    description:"Earth's hqkfjjkqfjkkjfhjdfhldhf",
    genre:"comedy",
    img:"https://s2.best-wallpaper.net/wallpaper/1920x1200/1806/Tomb-Raider-2018-movie-Lara-Croft_1920x1200.jpg"
    },
    {
    title: "21 jump street",
    duration: "109 min",
    date: "2012",
    rate: 3,
    genre: "comedy",
    description:"Earth's hqkfjjkqfjkkjfhjdfhldhf",
    genre:"comedy",
    img:"https://c8.alamy.com/comp/AXPE5W/strangler-fig-around-the-doorway-used-in-the-film-lara-croft-tomb-AXPE5W.jpg"
    },
    ])
    const [keyword, setKeyword] = useState("")
    const [newRate,setNewRate] = useState(1);
    const search= (text) =>{setKeyword(text);
    };
    const setRate =(rate) =>{
      setNewRate(rate);
    };
    const AddMovie = (movie) =>{
      setMovies(movies.concat(movie))

    };
   
  return (
   
    <div className="App">
    <Filter search={search} setRate={setRate} newRate={newRate}  />
    
      <MovieList
      AddMovie={AddMovie}
       movies={movies.filter((movie) =>
      movie.rate >= newRate &&
      movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
    </div>
  );
}

export default App;
