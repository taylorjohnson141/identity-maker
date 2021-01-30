import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';


describe('App', () => {

  it('should display a ID card when user clicks submit button and all fields are filled out', () => {
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
        countries: reducer,
        identities: reducer
      }
    )
    let state = createStore(root,(applyMiddleware(thunk)));

    render (
      <Provider store={state}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    userEvent.type(screen.getByTestId('first-name1'), {target: {value: 'Bob'}});
    userEvent.type(screen.getByTestId('first-name2'), {target: {value: 'Sally'}});
    userEvent.type(screen.getByTestId('last-name'), {target: {value: 'Anderson'}});
    userEvent.type(screen.getByTestId('company'), {target: {value: 'Allstate'}});
    userEvent.type(screen.getByTestId('occupation'), {target: {value: 'lion tamer'}});
    userEvent.type(screen.getByTestId('restaurant'), {target: {value: 'Olive Garden'}});
    userEvent.type(screen.getByTestId('pet-singular'), {target: {value: 'fish'}});
    userEvent.type(screen.getByTestId('pet-plural'), {target: {value: 'iguanas'}});
    userEvent.type(screen.getByTestId('number1'), {target: {value: '4'}});
    userEvent.type(screen.getByTestId('number2'), {target: {value: '6'}});
    userEvent.type(screen.getByTestId('sport'), {target: {value: 'tennis'}});
    userEvent.type(screen.getByTestId('game'), {target: {value: 'Trouble'}});
    userEvent.type(screen.getByTestId('genre1'), {target: {value: 'horror'}});
    userEvent.type(screen.getByTestId('genre2'), {target: {value: 'romance'}});
    userEvent.type(screen.getByTestId('color'), {target: {value: 'violet'}});
    userEvent.type(screen.getByTestId('zoo-animal'), {target: {value: 'elephant'}});
    userEvent.type(screen.getByTestId('countries'), {target: {value: 'Mexico'}});
    userEvent.click(screen.getByText('Submit'));

     expect(screen.getByText("LAST NAME")).toBeInTheDocument();
     expect(screen.getByText("FIRST NAME")).toBeInTheDocument();expect(screen.getByText("COUNTRY OF ORIGIN")).toBeInTheDocument();

  });

  it('should not display a ID card when user clicks submit button and all fields are not filled out', () => {
    const mockDispatch = jest.fn();
    let initState =
      [{
        name:"Mexico"
      }]
    let reducer = (state = initState, action) => {
      if(action.type === 'SET_COUNTRIES'){
        return [...state, {id: action.id, ...action.identity}]
      }
      return state
    }
    let identities = (state = [], action) => {
      if(action.type === 'ADD_ID'){
        return [...state, {id: action.id, ...action.identity}]
      }
      return state
    }
    let root = combineReducers(
      {
        countries: reducer,
        identities: identities
      }
    )
    let state = createStore(root,(applyMiddleware(thunk)));

    render (
      <Provider store={state}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    userEvent.type(screen.getByTestId('first-name1'), {target: {value: 'Bob'}});
    userEvent.type(screen.getByTestId('first-name2'), {target: {value: 'Sally'}});
    userEvent.type(screen.getByTestId('last-name'), {target: {value: 'Anderson'}});
    userEvent.type(screen.getByTestId('company'), {target: {value: 'Allstate'}});
    userEvent.type(screen.getByTestId('occupation'), {target: {value: 'lion tamer'}});
    userEvent.type(screen.getByTestId('restaurant'), {target: {value: 'Olive Garden'}});
    userEvent.type(screen.getByTestId('pet-singular'), {target: {value: 'fish'}});
    userEvent.type(screen.getByTestId('pet-plural'), {target: {value: 'iguanas'}});
    userEvent.type(screen.getByTestId('number1'), {target: {value: '4'}});
    userEvent.type(screen.getByTestId('number2'), {target: {value: '6'}});
    userEvent.type(screen.getByTestId('sport'), {target: {value: 'tennis'}});
    userEvent.type(screen.getByTestId('game'), {target: {value: 'Trouble'}});
    userEvent.type(screen.getByTestId('genre1'), {target: {value: 'horror'}});
    userEvent.type(screen.getByTestId('genre2'), {target: {value: 'romance'}});
    userEvent.type(screen.getByTestId('color'), {target: {value: 'violet'}});
    userEvent.type(screen.getByTestId('zoo-animal'), {target: {value: 'elephant'}});
    userEvent.type(screen.getByTestId('countries'), {target: {value: 'Mexico'}});
    userEvent.click(screen.getByText('Submit'));

     expect(screen.getByText("Make an ID")).toBeInTheDocument();

  });

  it.skip('should load an ID page when an ID card is clicked', () => {

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
        countries: reducer,
        identities: reducer
      }
    )
    let state = createStore(root,(applyMiddleware(thunk)));

    render (
      <Provider store={state}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    userEvent.click(screen.getByText('LAST NAME'));
     expect(screen.getByText("Your Backstory")).toBeInTheDocument();
  })

})
