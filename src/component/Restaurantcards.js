import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function restaurantcards({restaurant}) {
    console.log(restaurant)                //console done by here because,in return only html code is given
  return (
    <>
          <Card className='m-4 bg-secondary'>

       <Card.Img variant="top" className='p-4' src={restaurant.photograph}/> 
          {/* //this restuarant is the one saved as a variable in resutarant list to add item inside  restuarant=data */}
      <Card.Body className='bg-danger'>
        <Card.Title className='text-white'>{restaurant.name}</Card.Title>
        <Card.Text className='text-warning'>
         {restaurant.neighborhood}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default restaurantcards
