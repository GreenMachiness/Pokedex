import { rest } from 'msw'
import { setupWorker } from 'msw'
// JSON response data
//import greeting from './data/greeting.json'


// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  rest.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`, (req, res, ctx) => { // capture "GET /greeting" requests
    //return res(ctx.json(greeting)) // respond using a mocked JSON body
  }),

)