import React from 'react';
import '@testing-library/jest-dom';
import MissionArea from './MissionArea.js';
import { render, screen } from '@testing-library/react';


describe('MissionArea', () => {
  it('should render correctly', () =>{

  let currentCountry = {
    nativeName:"الجزائر",
    subregion:'Northern Africa',
    regionalBlocs:{acronym: "AU", name: "African Union"},
    name:"Algeria",
    population:40400000,
    capital:"Algiers",
    currencies:[{code: "DZD", name: "Algerian dinar", symbol: "د.ج"}],
    languages:[{iso639_1: "ar", iso639_2: "ara", name: "Arabic", nativeName: "العربية"}],
    flag:'https://restcountries.eu/data/dza.svg',
  }
  render(<MissionArea currentCountry = {currentCountry}/>)
  let countryArticle = screen.getByText('Operation:الجزائر')
  let img = screen.getByAltText('country flag')
  expect(img).toBeInTheDocument()
  expect(countryArticle).toBeInTheDocument()
})
})