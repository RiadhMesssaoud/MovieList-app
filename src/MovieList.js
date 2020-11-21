import React,{useState} from 'react'
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';

const MovieList = ({movies}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        
        <div 
        style={{display:"flex",flexDirection:"row"}}>
        
        {movies.map((el,i) =>(
            <MovieCard movie = {el} key={i}/>
          
        ))}
        
        <div>
        <button onClick={handleShow} style={{position: "center"}}>Add Movie</button>
            <AddMovie handleClose={handleClose} show={show}/>
        </div>
            
        </div>
    );
};
export default MovieList
