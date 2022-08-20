
import './App.css'
import useFetch from './hooks/useFetch'

function App() {

  const url = "https://cars-crud.herokuapp.com/cars/"

  const dataInfo = useFetch(url)

  console.log(dataInfo)


  

  return (
    <div className="App-container">
      <h1>Practice C.R.U.D</h1>
    </div>
  )
}

export default App
