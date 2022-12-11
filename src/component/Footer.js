import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Footer() {
  return (
    <div>
       <Card className="text-center bg-black">
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body className="bg-dark">
        <Card.Title className="text-white">Enjoy Every Moments</Card.Title>
        <Card.Text className="text-white">
          Come And Enjoy The Tastes
        </Card.Text>
        <Button variant="primary">Heaven Of Tastes</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Footer
