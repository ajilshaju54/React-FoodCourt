import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {

const[allRestaurant,setRestaurant] = useState([])
//function used to call API to get all iformation from restaurant.json

const getRestuarants=async()=>{
  await fetch('/restuarant.json')
  .then((data)=>{
    data.json()            //.json used for convert json version into array or object format...changing 
                            // from json to other formats take  place from the next step
  .then((result)=>{
  setRestaurant(result.restaurants);           //this step
}) }) 

}
console.log(allRestaurant)
useEffect(()=>{              //useEffect is a hook...for data comming while render ..here us a hook name as useEffect.
  getRestuarants()
},[])                         //while we load this page,refreshing come all time..to avoid that , create an array
  return (
    <Row>
      {
        allRestaurant.map(item=>(
          // <h1>{item.name}</h1>
          <Col sm={12} md={6} lg={4}  xl={3}>
          <Restaurantcards restaurant={item} />
          </Col>
        ))
      }
    </Row>
  )
}

export default Restaurantlist
