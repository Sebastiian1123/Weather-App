
import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  

  useState({})
  const [latitude, setLatitude]= useState(``)
  const [longitude, setLongitude]= useState(``)
  const [clima, setClima]=useState("")
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      
    })
    if(latitude !== `` && longitude !== ``){
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3a261a4252f7472e8aad542f835362c9`)
    .then(resp=>setClima(resp.data))
    .catch(error=> console.log(error))}

  },[latitude, longitude])

    
console.log (latitude)
console.log(longitude)
console.log (setClima)

  return (

    <div className="App">
      <div className='climate-card'>
      <h1>{clima.name}</h1>
      <h2>State: {clima?.weather?.[0]?.main}</h2>
      <h2>{clima?.weather?.[0]?.icon}</h2>
      <h2>Temperature: {clima?.main?.temp}°C</h2>
      <h2>Humidity: {clima?.main?.humidity}</h2>
      <h2>Country{clima?.sys?.country}</h2>
      </div>
   </div>
    
  )
}

export default App
