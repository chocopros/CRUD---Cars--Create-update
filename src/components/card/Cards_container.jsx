import React from 'react'
import "./card_container.css"

const Cards_container = ({dataInfoCars}) => {
  
  console.log(dataInfoCars)

  return (
    <section className='cars-container'>
      {
        dataInfoCars?.map((car)=>(
          <div className="card-cars-container" key={car.id}>
            <ul className='list-card-details'>
              <li><span>Brand: </span>{car.brand}</li>
              <li><span>Model: </span>{car.model}</li>
              <li><span>Color: </span>{car.color}</li>
              <li><span>Year: </span>{car.year}</li>
              <li><span>Price: </span>{`${car.price} $`}</li>
              <li><span>id: </span>{car.id}</li>
            </ul>
          </div>
        ))
      }
    </section>
  )

  
}

export default Cards_container