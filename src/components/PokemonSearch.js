//** Import Statements
import { useState } from 'react'
//** Setup (define helper functions and variables here)

function PokemonSearch() {
  //** Destructure Props
  const [Pokemon, setPokemon] = useState('')
  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(Pokemon)
  }
  //** State Variables

  //** Component Logic

  //** Return JSX
  return (
    <div> 
      Do you see me the second time?
      <br></br>
      How about a third time?
      <br></br>
      <form onSubmit={handleSubmit}>
    <label>
      Pokemon:
      <input type="text" placeholder="Who's that Pokemon?" value={Pokemon} onChange={(event) => setPokemon(event.target.value)} />
    </label>
    <button type="submit">Submit</button>
  </form>

    </div>
  )
}
export default PokemonSearch