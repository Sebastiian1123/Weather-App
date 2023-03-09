
import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import ClimaState from './components/ClimaState'


function App() {
  

  const [latitude, setLatitude]= useState(``)
  const [longitude, setLongitude]= useState(``)
  const [clima, setClima]=useState(``)
  useState({})
 
  useEffect(()=>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3a261a4252f7472e8aad542f835362c9&units=metric&lang=sp`)
    .then(resp=>setClima(resp.data))
    .catch(error=> console.log(error))
  },[latitude, longitude],
  
 
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      
    })
    )
  
console.log (latitude)
console.log(longitude)
console.log (setClima)



  return (
    
    <div className="App">
      
      <ClimaState
      data={clima}
      />
      
   </div>
    
  )
}

export default App
