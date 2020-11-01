import React from 'react';
import Header from './Header.js'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render the background section of the header', () => {
    render(<Header />);

    const backgroundSection = screen.getByTitle('background');

    expect(backgroundSection).toBeInTheDocument();
  });

  it('should render a welcome message', () => {
    render(<Header />);

    const welcomeMessage = screen.getByText("Welcome, Agent");

    expect(welcomeMessage).toBeInTheDocument();
  });

  it('should render a spy logo', () => {
    render(<Header />);

    const spyLogo = screen.getByAltText('spy-icon');

    expect(spyLogo).toBeInTheDocument();
  });
})
