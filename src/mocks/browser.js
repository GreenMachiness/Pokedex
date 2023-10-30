import { rest } from 'msw'
import { setupWorker } from 'msw'
// JSON response data
import pokemonData from './data/pokemon.json'


// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  rest.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`, (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(pokemonData)) // respond using a mocked JSON body
  }),
//   rest.get('https://example.api.com/farewell', (req, res, ctx) => { // capture "GET /greeting" requests
//   return res(ctx.json({farewell: 'goodbye there'})) // respond using a mocked JSON body
// }),

)