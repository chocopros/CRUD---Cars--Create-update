import axios from "axios"
import { useState, useEffect } from "react"


const useFetch = (url = "") => {

    const [response, setResponse] = useState()

   useEffect(()=>{

    if(url === ""){
        console.log("URL none")
    } else {
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log("Error Axios"))
    }

   },[])

   return response

}

export default useFetch