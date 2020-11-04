import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import rootReducer from '../../reducers/index.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { fetchCountries } from '../../thunks/fetchCountries';
import thunk from 'redux-thunk';


describe('App', () => {
  // should render a card when idform submit button is hit
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

  
// when card is clicked, routes to id page
})
