import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockData from './helpers/mockData';
import userEvent from '@testing-library/user-event';

test('Verifica se os filtros são renderizados corretamente', () => {
  render(<App />);
  const inputName = screen.getByTestId('name-filter');
  const selectColumn = screen.getByTestId('column-filter');
  const selectComparison = screen.getByTestId('comparison-filter');
  const inputNumber = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');
  const buttonRemoveAll = screen.getByTestId('button-remove-filters');

  expect(inputName).toBeVisible();
  expect(selectColumn).toBeVisible();
  expect(selectComparison).toBeVisible();
  expect(inputNumber).toBeVisible();
  expect(buttonFilter).toBeVisible();
  expect(buttonRemoveAll).toBeVisible();
});

test('Verifica renderização do cabeçalho da tabela', () => {
  render(<App />);
  const headerName = screen.getByText('Name');
  const headerRotation = screen.getByText('Rotation Period');
  const headerOrbital = screen.getByText('Orbital Period');
  const headerDiameter = screen.getByText('Diameter');
  const headerClimate = screen.getByText('Climate');
  const headerGravity = screen.getByText('Gravity');
  const headerTerrain = screen.getByText('Terrain');
  const headerSurfaceWater = screen.getByText('Surface Water');
  const headerPopulation = screen.getByText('Population');
  const headerFilms = screen.getByText('Films');
  const headerCreated = screen.getByText('Created');
  const headerEdited = screen.getByText('Edited');
  const headerURL = screen.getByText('URL');


  expect(headerName).toBeVisible();
  expect(headerRotation).toBeVisible();
  expect(headerOrbital).toBeVisible();
  expect(headerDiameter).toBeVisible();
  expect(headerClimate).toBeVisible();
  expect(headerGravity).toBeVisible();
  expect(headerTerrain).toBeVisible();
  expect(headerSurfaceWater).toBeVisible();
  expect(headerPopulation).toBeVisible();
  expect(headerFilms).toBeVisible();
  expect(headerCreated).toBeVisible();
  expect(headerEdited).toBeVisible();
  expect(headerURL).toBeVisible();
});

test('Verifica se ao abrir a aplicação a tabela é renderizada sem filtros', async () => {
  
  jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

  render(<App />);

  const nameTatooine = await screen.findByText('Tatooine');
  const nameAlderaan = await screen.findByText('Alderaan');
  const nameYavin = await screen.findByText('Yavin IV');
  const nameHoth = await screen.findByText('Hoth');
  const nameDagobah = await screen.findByText('Dagobah');
  const nameBespin = await screen.findByText('Bespin');
  const nameEndor = await screen.findByText('Endor');
  const nameNaboo = await screen.findByText('Naboo');
  const nameCoruscant = await screen.findByText('Coruscant');
  const nameKamino = await screen.findByText('Kamino');

  expect(nameTatooine).toBeVisible();
  expect(nameAlderaan).toBeVisible();
  expect(nameYavin).toBeVisible();
  expect(nameHoth).toBeVisible();
  expect(nameDagobah).toBeVisible();
  expect(nameBespin).toBeVisible();
  expect(nameEndor).toBeVisible();
  expect(nameNaboo).toBeVisible();
  expect(nameCoruscant).toBeVisible();
  expect(nameKamino).toBeVisible();
});

test('Verifica se ao filtrar por digitação a tabela é renderizada corretamente', async () => {
  
  jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

  render(<App />);

  const inputName = screen.getByTestId('name-filter');
  expect(inputName).toBeVisible();

  const nameTatooine = await screen.findByText('Tatooine');
  const nameAlderaan = await screen.findByText('Alderaan');
  const nameHoth = await screen.findByText('Hoth');
  const nameCoruscant = await screen.findByText('Coruscant');

  expect(nameTatooine).toBeVisible();
  expect(nameAlderaan).toBeVisible();
  expect(nameHoth).toBeVisible();
  expect(nameCoruscant).toBeVisible();

  userEvent.type(inputName, 't');

  expect(nameTatooine).toBeVisible();
  expect(nameAlderaan).not.toBeVisible();
  expect(nameHoth).toBeVisible();
  expect(nameCoruscant).toBeVisible();  
});

test('Verifica se adiciona filtros ao clicar no botão FILTRAR', async () => {
  
  jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

  render(<App />);

  const inputNumber = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');
  expect(inputNumber).toBeVisible();
  expect(buttonFilter).toBeVisible();

  const nameTatooine = await screen.findByText('Tatooine');
  const nameNaboo = await screen.findByText('Naboo');
  const nameCoruscant = await screen.findByText('Coruscant');

  expect(nameTatooine).toBeVisible();
  expect(nameNaboo).toBeVisible();
  expect(nameCoruscant).toBeVisible();

  userEvent.type(inputNumber, '4400000000');
  userEvent.click(buttonFilter);

  // const liFilter = screen.findByTestId('filter');
  // expect(liFilter).toBeVisible();

  expect(nameTatooine).not.toBeVisible();
  expect(nameNaboo).toBeVisible();
  expect(nameCoruscant).toBeVisible();  
});





