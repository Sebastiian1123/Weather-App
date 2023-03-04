


const Character=({data}) =>{
  return (
    <div className='info'>
        <img src={data.image} alt="" />
        <h1>{data.name}</h1>
        <h3><span>Status:</span>{data.status}</h3>
        <h3><span>Gender:</span>{data.gender}</h3>
        <h3><span>Specie:</span>{data.species}</h3>
        <h3><span>Location:</span>{data?.location?.name}</h3>
    </div>
  )
}

export default Character