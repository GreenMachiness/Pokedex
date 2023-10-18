//** Import Statements
import { useState, useEffect } from 'react'
import PokeData from './PokeData';
import PokeView from './PokeView';
import { Link } from "react-router-dom"
//** Setup (define helper functions and variables here)

function Card(props) {
  
 //** Destructure Props
  const { 
    name, 
    url
  } = props
   
  //** State Variables
  const [data, setData] = useState(null)
  console.log('data: ', data)
  //** Component Logic
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching data!')
        }
        return response.json() // parse the response data
      })
      .then((responseData) => {
        console.log('response data: ', responseData)
        setData(responseData) // set state with the data received
      })
      .catch((err) => console.log(err)) // handle the error
  }, [])
  if (!data) {
    return (
      <div>
        <h1>Error</h1>
        <div>Finding Pokemons...</div>
      </div>
    )
  }
  //** Return JSX

  return (
    <div className="card">
      <img src={data.sprites.front_default}/>
      <h2>Name: {name}</h2>
      <p>Type {data.types[0].type.name}</p>
      <div>Abilities {data.abilities[0].ability.name}</div>
      <Link to={`/PokeView/${data.id}`}>
            PokeView
        </Link>
    </div>
  );
}

export default Card;
