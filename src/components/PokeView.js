//** Import Statements
import React, { useState, useEffect } from 'react'
import Card from './Card'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
//** Setup (define helper functions and variables here)


const PokeData = (props) => {
  //** Destructure Props
const {

} = props
const {name } = useParams()

  //** State Variables
  const [data, setData] = useState(null)


  //** Component Logic
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching data!')
        }
        return response.json() // parse the response data
      })
      .then((responseData) => {
        console.log(responseData)
        setData(responseData) // set state with the data received
      })
      .catch((err) => console.log(err)) // handle the error
  }, [])
  
    // Guard clause to prevent runtime errors
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
    <div>
        {name}
        <br></br>
        You found me! 

        <br></br>
        <Link to={".."}>Back</Link>
    </div>
  )
}

export default PokeData
