import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({movie}) => {
    return (
        <div>
           <Card style={{ width: '25rem' ,margin: "15px 10px" }}>
          <Card.Img variant="" src={movie.img} style={{width: "100%"}} />
          <Card.Body>
           <Card.Title>{movie.title}</Card.Title>

        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          />
           
            <Card.Text>
           {movie.description}
           </Card.Text>
  </Card.Body>

  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.date}</ListGroupItem>
    <ListGroupItem>{movie.duration}</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  
</Card>
        </div>
    )
}

export default MovieCard
