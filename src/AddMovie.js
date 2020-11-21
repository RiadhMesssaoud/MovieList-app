import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


const AddMovie = ({handleClose, show, addMovie}) => {
    const [newMovie,setNewMovie]=useState({
        title:"",
        img:"",
        duration:0,
        genre:"",
        date:"",
        rate: 1,
        description:"",

    });
    const handleChange =(e) =>{setNewMovie({...newMovie,[e.target.name]: e.target.value})}
    const onStarClick =(nextValue, prevValue, name)=>{
        setNewMovie({...newMovie,rate:nextValue})
    }
    
    
    
    return (
        <div>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="put a movie title" name="title" onChange={handleChange} />
    
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Img URL</Form.Label>
        <Form.Control type="password" placeholder="put a movie image" name="img" onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>DurationL</Form.Label>
        <Form.Control type="password" placeholder="put a movie duration" name="duration" onChange={handleChange} />
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newMovie.rate}
          onStarClick={onStarClick}
          onChange={handleChange}
      
        />
        </Form.Group>
        <Form.Label>select a movie genre</Form.Label>
    <Form.Control as="select" multiple name="genre" onChange={handleChange}>
      <option>action</option>
      <option>comedy</option>
      <option>sci-fi</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Movie description</Form.Label>
    <Form.Control as="textarea" rows={2} name="description"  onChange={handleChange}/>
  </Form.Group>
 
  
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
              addMovie(newMovie);
              handleClose();
              }}>
           Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    )
}

export default AddMovie
