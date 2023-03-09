


const ClimaState=({data}) =>{
    return (
        <div>
        <div className='header'>
        <div className='sky'>
        <h1>WEATHER APP</h1>
        </div>
      </div>
      <div className='climate-card'>
        <div className='b1'>
          <h1>{data?.main?.temp}°</h1>
          <img src={ `/iconos/${data?.weather?.[0]?.icon}.svg`} alt="" />
        </div>
        <div className='state'>
          <h2>Humedad: <span>{data?.main?.humidity}%</span></h2>
          <h2>Temperatura Min: <span>{data?.main?.temp_min}°C</span></h2>
          <h2>Temperatura Max: <span>{data?.main?.temp_max}°C</span></h2>
        </div>
        <div className='country'>
          <h1>{data?.name} - {data?.sys?.country}</h1> 
          <h2 h2>{data?.weather?.[0]?.description}</h2>
        </div>
      </div>
      </div>
    )
  }
  
  export default ClimaState