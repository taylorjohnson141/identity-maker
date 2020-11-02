import "@testing-library/jest-dom";
import { fetchCountries } from './fetchCountries'
jest.mock('./fetchCountries')

describe('fetchCountries', () => {

  it('dispatches isLoading', () => {

  })

  describe('when the fetch is successful', () => {
    it('should dispatch setCountries', () => {

    })
  })

  it('dispatches error when the fetch fails', () => {

  })
})
