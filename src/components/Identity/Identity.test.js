import React from 'react';
import Identity from './Identity';
import {screen,render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from '../../reducers/index.js';

describe('Identity', () =>{
  it('should render Identity component correctly',() =>{

    const store = createStore(rootReducer);
    const dumIndex = 1;
    const dumIdentity = {
      id: 5,
      'first-name1': "Jerry",
      'first-name2': "Cosmo",
      'first-name3': "Elaine",
      'last-name': "Seinfeld",
      'company-name': "Vandelay Industries",
      'occupation-name': "importer",
      'restaurant-name': "Olive Garden",
      'singular-animal-name': "monkey",
      'plural-animal-name': "cats",
      numbers1: "2",
      numbers2: "8",
      'sport-name': "tennis",
      'game-name': "checkers",
      genre1: "horror",
      genre2: "mystery",
      'color-name': "red",
      'zoo-animal': "zebra",
      country: "Albania"
    };

    render (
      <Provider store={store}>
        <BrowserRouter>
          <Identity key={dumIndex} identities={dumIdentity} />
        </BrowserRouter>
      </Provider>
    );

    let img = screen.getByAltText('spy-pic')
    let lastName = screen.getByText('Seinfeld')
    let firstName = screen.getByText('Jerry')

    expect(lastName).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(firstName).toBeInTheDocument()
  });

})
