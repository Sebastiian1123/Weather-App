
import axios from 'axios'
import './App.css'
import Character from './components/Character'
import { useEffect, useState } from 'react'


function App() {
  const [characterData, setCharacterData]= useState ({})
  const [idRandom, setIdRandom]= useState(1)

  useState({})


  useEffect(()=>{
    axios
    .get(`https://rickandmortyapi.com/api/character/${idRandom}`)
    .then(resp=>setCharacterData(resp.data))
    .catch(error=> console.error(error))

  },[idRandom])

  const generateRandomNumber =()=>{
    const numberRandom =Math.floor(Math.random()*826)+1

    setIdRandom(numberRandom)
  }


  return (

    <div className="App">
  
      <Character
      data={characterData}
      />
      <button onClick={generateRandomNumber}>Change Character</button>

   </div>
    
  )
}

export default App
