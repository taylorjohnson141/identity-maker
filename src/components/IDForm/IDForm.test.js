import React from 'react';
import '@testing-library/jest-dom';
import IDForm from './IDForm.js';
import { render, screen, waitFor } from '@testing-library/react';
import rootReducer from '../../reducers/index';
import {useDispatch, useSelector} from 'react-redux'
import thunk from 'redux-thunk';
import { Provider,} from 'react-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import userEvent from '@testing-library/user-event'



describe('IDForm', () => {
  it('should render loading on first render', () => {
    const store = createStore(rootReducer, (applyMiddleware(thunk)))
    render (<Provider store ={store}><IDForm /></Provider>);
    expect(screen.getByText('Loading')).toBeInTheDocument();
   
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
        
        expect(screen.getByTitle('list-countries')).toBe('<option name="Mexico" value="Mexico" />')

    })
  
})

// it('should render form when countries are found', async () =>{
  //   const store = createStore(rootReducer, (applyMiddleware(thunk)))
  //   render (<Provider store ={store}><IDForm /></Provider>);
  //  let text = await waitFor(() => screen.getByText('Enter Three First Names'))
  //   expect(text).toBeInTheDocument();

  // })
