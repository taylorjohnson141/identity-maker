import React from 'react'
import Identity from './Identity'
import {screen,render} from '@testing-library/react'

describe('Identity', () =>{
  it('should render correctly',() =>{
   render(<Identity />);
    let img = screen.getByAltText('spy-pic')
    let lastName = screen.getByText('Last Name')
    // let firstName = screen.getByText('First Name')
    // let dateOfBirth = screen.getByText('Date of Birth')
    // let placeOfBirth = screen.getByText('Place of Birth')

    expect(lastName).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    // expect(firstName).toBeInTheDocument()
    // expect(dateOfBirth).toBeInTheDocument()
    // expect(placeOfBirth).toBeInTheDocument()
  })
})