import React from 'react';
import Header from './Header.js'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render a welcome message', () => {
    render(<Header />)
    
    const welcomeMessage = screen.getByText("Welcome, Agent")

    expect(welcomeMessage).toBeInTheDocument()
  })
})
