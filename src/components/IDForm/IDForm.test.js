import React from 'react';
import '@testing-library/jest-dom';
import IDForm from './IDForm.js';
import { render, screen, waitFor } from '@testing-library/react';
import rootReducer from '../../reducers/index';
import {useDispatch, useSelector} from 'react-redux'
import thunk from 'redux-thunk';
import { Provider,} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import userEvent from '@testing-library/user-event'
<<<<<<< HEAD


=======
>>>>>>> 200275524d96304f357060ee91fb5dce3e109fb9

describe('IDForm', () => {
  it('should render loading on first render', () => {
    const store = createStore(rootReducer, (applyMiddleware(thunk)))
    render (<Provider store ={store}><IDForm /></Provider>);
    expect(screen.getByText('Loading')).toBeInTheDocument();
<<<<<<< HEAD
   
  })
  it('should render form when countries are found', async () =>{
    const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
    let initState = 
      [{
        name:"Mexico"
      }]
    
=======
  });

  it('should render form when countries are found', async () =>{
    const mockDispatch = jest.fn();
    let initState =
      [{
        name:"Mexico"
      }]
>>>>>>> 200275524d96304f357060ee91fb5dce3e109fb9
    let reducer = (state = initState, action) => {
      if(action.type === 'ADD_ID'){
        return [...state, {id: action.id, ...action.identity}]
      }
      return state
    }
    let root = combineReducers(
      {
        countries:reducer
      }
    )
    let state = createStore(root,(applyMiddleware(thunk)))
<<<<<<< HEAD
  
       
       render (<Provider store ={state}><IDForm /></Provider>);
        
        expect(screen.getByTitle('list-countries')).toBe('<option name="Mexico" value="Mexico" />')

    })
  
})

// it('should render form when countries are found', async () =>{
  //   const store = createStore(rootReducer, (applyMiddleware(thunk)))
  //   render (<Provider store ={store}><IDForm /></Provider>);
  //  let text = await waitFor(() => screen.getByText('Enter Three First Names'))
  //   expect(text).toBeInTheDocument();

  // })
=======
    render (<Provider store ={state}><IDForm /></Provider>);
    expect(screen.getByTestId('list-countries')).toBeInTheDocument()
  });

  it('should render a list of country options in a dropdown menu', () => {
    const mockDispatch = jest.fn();
    let initState =
      [{
        name:"Mexico"
      },
      {
        name:"Angola"
      }]
    let reducer = (state = initState, action) => {
      if(action.type === 'ADD_ID'){
        return [...state, {id: action.id, ...action.identity}]
      }
      return state
    }
    let root = combineReducers(
      {
        countries:reducer
      }
    )
    let state = createStore(root,(applyMiddleware(thunk)))
    render (<Provider store ={state}><IDForm /></Provider>);
    expect(screen.queryAllByTestId('country')).toHaveLength(2)
  });

  it('should change the value of the input fields', () => {
    const mockDispatch = jest.fn();
    let initState =
      [{
        name:"Mexico"
      },
      {
        name:"Angola"
      }]
    let reducer = (state = initState, action) => {
      if(action.type === 'ADD_ID'){
        return [...state, {id: action.id, ...action.identity}]
      }
      return state
    }
    let root = combineReducers(
      {
        countries:reducer
      }
    )
    let state = createStore(root,(applyMiddleware(thunk)))
    render (<Provider store ={state}><IDForm /></Provider>);

    const firstName = screen.getByTestId('first-name1');
    userEvent.type(firstName, 'Zebadiah')
    expect(firstName).toHaveValue('Zebadiah')
  });
});
>>>>>>> 200275524d96304f357060ee91fb5dce3e109fb9
