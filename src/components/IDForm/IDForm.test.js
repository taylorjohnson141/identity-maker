import React from 'react';
import '@testing-library/jest-dom';
import IDForm from './IDForm.js';
import { render, screen } from '@testing-library/react';


describe('IDForm', () => {
  it('should render an ID form', () => {
    render (<IDForm />);
    expect(screen.getByText('first name')).toBeInTheDocument();
    expect(screen.getByText('last name')).toBeInTheDocument();
    expect(screen.getByText('target country')).toBeInTheDocument();
  })
})
