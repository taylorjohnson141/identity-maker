import React from 'react';
import IDArea from './IDArea.js';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';

describe('IDArea', () => {
  it('should render the identity card area with a message asking the user to make an ID if they have not', () => {
    const store = createStore(rootReducer);

    render(<Provider store={store}><IDArea /></Provider>);

    expect(screen.getByText('Make an ID')).toBeInTheDocument();
  });

})
