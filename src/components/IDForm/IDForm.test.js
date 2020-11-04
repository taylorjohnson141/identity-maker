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
  });

  it('should render form when countries are found', async () =>{
    const mockDispatch = jest.fn();
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
  })

});
