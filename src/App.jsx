
import './App.css'
import Cards_container from './components/card/Cards_container'
import useFetch from './hooks/useFetch'

function App() {

  const url = "https://cars-crud.herokuapp.com/cars/"

  const dataInfoCars = useFetch(url)

  return (
    <div className="App-container">
      <h1>Practice C.R.U.D</h1>
      <Cards_container dataInfoCars={dataInfoCars} />
      
    </div>
  )
}

export default App
