import React from 'react';
import IDPage from './IDPage';

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from '../../reducers/index.js'

describe.only('IDPage', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useSelector: jest.fn()
    }));
  });

  it('should render loading when there are no countries', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <IDPage idNumber='1'/>
        </BrowserRouter>
      </Provider>
    );

    const loading = screen.getByText('Loading!')
    expect(loading).toBeInTheDocument()
  });

  it.skip('should fire a useSelector for currentIdentity', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <IDPage idNumber='1'/>
        </BrowserRouter>
      </Provider>
    );

   const mockIdentity = [{
      color: 'red',
      company: 'Bic',
      country: 'Belguim',
      firstName1: 'John',
      firstName2: 'Wayne',
      firstName3: 'Pilgrim',
      game: 'backgammon',
      genre1: 'mystery',
      genre2: 'comedy',
      lasName: 'Funkstein',
      numbers1: 2,
      numbers2: 5,
      occupation: 'inspector',
      pluralAnimal: 'zebras',
      singularAnimal: 'moose',
      sport: 'rugby',
      zooAnimal: 'lemur'
    }];


    //const useSelector = jest.fn().mockImplementation((mockState) => mockIdentity)

    expect(useSelector).toHaveProperty('state.identities', mockIdentity)

    // want to mock out useSelector to see if it gets called
  })
});
