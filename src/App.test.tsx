import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import {setupServer} from 'msw/node'
import App from './App';

const server = setupServer(
  rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
    return res(ctx.json({
      "count": 1,
      "next": "https://swapi.dev/api/people/?page=2",
      "previous": null,
      "results": [
        {
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "hair_color": "blond",
          "skin_color": "fair",
          "eye_color": "blue",
          "birth_year": "19BBY",
          "gender": "male",
          "homeworld": "https://swapi.dev/api/planets/1/",
          "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
          ],
          "species": [],
          "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
          ],
          "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
          ],
          "created": "2014-12-09T13:50:51.644000Z",
          "edited": "2014-12-20T21:17:56.891000Z",
          "url": "https://swapi.dev/api/people/1/"
        }]}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

/*test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/learn react/i);
  expect(titleElement).toBeInTheDocument();
});*/

test('renders first API response element, Luke Skywalker', async () => {
  render(<App />);

  await waitFor(() => screen.findByText(/Name:/i));

  const character = screen.getByText(/Luke Skywalker/i);
  expect(character).toBeInTheDocument();
})


