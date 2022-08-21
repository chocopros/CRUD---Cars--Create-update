import './App.css'
import axios from "axios"
import Cards_container from './components/card/Cards_container'
import { useEffect, useState } from 'react'

function App() {

  const [dataInfoCars, setDataInfoCars] = useState([])

  //Llamando las Card Cars Exsitentes
  useEffect(()=>{
    const url = "https://cars-crud.herokuapp.com/cars/"
    axios.get(url)
      .then(res => setDataInfoCars(res.data))
      .catch(err => console.log("error Axios"))
  },[])

  //Actualizando Informacion
  const getAllCars = () => {
    const url = "https://cars-crud.herokuapp.com/cars/"
    axios.get(url)
      .then(res => setDataInfoCars(res.data))
      .catch(err => console.log("error Axios"))
  }
  

  //Creando Nueva Carta de Carro
  const createNewCar = () => {

    const url = "https://cars-crud.herokuapp.com/cars/"
    const info= []

    const data = {
      brand: "Ford",
      model: "Tucan",
      color: "Plate",
      year: 1969,
      price: "2222"
    }

    axios.post(url, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(()=>getAllCars())
  }

  //Detelete y actualiza
  const deleteCarById = id => {
    const url = `https://cars-crud.herokuapp.com/cars/${id}/`
    axios.delete(url)
      .then(res => getAllCars())
      .catch(err => console.log(err))
  }

  return (
    <div className="App-container">
      <h1>Practice C.R.U.D</h1>
      <div>
        <button onClick={createNewCar}>Create New Card</button>
      </div>
      <Cards_container 
        dataInfoCars={dataInfoCars}
        deleteCarById={deleteCarById}
        />
      
    </div>
  )
}

export default App
