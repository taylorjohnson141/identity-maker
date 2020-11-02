import React from 'react';
import '@testing-library/jest-dom';
import StoryArea from './StoryArea.js';
import { render, screen } from '@testing-library/react';


describe('StoryArea', () => {
  it('should render the Story Area correctly', () => {
    render(<StoryArea/>)
  })
})