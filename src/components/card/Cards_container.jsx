import React from 'react'
import "./card_container.css"

const Cards_container = ({dataInfoCars,setUpdateInfo,deleteCarById}) => {

  const getInfoUpdate = (car) => {
    setUpdateInfo(car)
  }

  return (
    <section className='cars-container'>
      {
        dataInfoCars?.map( car =>(
          <div className="card-cars-container" key={car.id}>
            <ul className='list-card-details'>
              <li><span>Brand: </span>{car.brand}</li>
              <li><span>Model: </span>{car.model}</li>
              <li><span>Color: </span>{car.color}</li>
              <li><span>Year: </span>{car.year}</li>
              <li><span>Price: </span>{`${car.price} $`}</li>
              <li><span>id: </span>{car.id}</li>
            </ul>
            <div className='container-btn'>
              <button 
                onClick={() => deleteCarById(car.id)} 
                className='btn'>Detele this Car
              </button>
              <button 
                onClick={() => getInfoUpdate(car)} 
                className='btn'>Update Info
              </button>
            </div>
          </div>
        ))
      }
    </section>
  )

  
}

export default Cards_container