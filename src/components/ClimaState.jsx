import { useEffect, useState } from "react"
import axios from "axios"


const ClimaState=({clima}) =>{
    return (
        <div>
        <div className='header'>
        <div className='sky'>
        <h1>WEATHER APP</h1>
        </div>
      </div>
      <div className='climate-card'>
        <div className='b1'>
          <h1>{clima?.main?.temp}°</h1>
          <img src={ `../public/iconos/${clima?.weather?.[0]?.icon}.png`} alt="" />
        </div>
        <div className='state'>
          <h2>Humedad: <span>{clima?.main?.humidity}%</span></h2>
          <h2>Temperatura Min: <span>{clima?.main?.temp_min}°C</span></h2>
          <h2>Temperatura Max: <span>{clima?.main?.temp_max}°C</span></h2>
        </div>
        <div className='country'>
          <h1>{clima?.name} - {clima?.sys?.country}</h1> 
          <h2 h2>{clima?.weather?.[0]?.description}</h2>
        </div>
      </div>
      </div>
    )
  }
  
  export default ClimaState