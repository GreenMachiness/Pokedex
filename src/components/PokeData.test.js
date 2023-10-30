import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
// import JSON
import pokemonData from "../mocks/data/pokemon.json";
import bulbasaurData from "../mocks/data/bulbasaur.json"

// declare which API requests to mock
const server = setupServer(
  rest.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`, (req, res, ctx) => {
    // capture "GET /greeting" requests
    return res(ctx.json(pokemonData)); // respond using a mocked JSON body
  }),
  rest.get(`https://pokeapi.co/api/v2/pokemon/:name`, (req, res, ctx) => {
    const {name} = req.params
    if (name === 'bulbasaur'){
        return res(ctx.json(bulbasaurData));
    }

  })
);
// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test("should render pokedata", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const text = await screen.findByText(/you found me!/i);
  expect(text).toBeVisible();
});
