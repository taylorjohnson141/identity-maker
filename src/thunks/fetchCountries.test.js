import "@testing-library/jest-dom";
import { fetchCountries } from './fetchCountries'
import { isLoading, hasErrored, setCountries } from '../actions/index.js'


describe('fetchCountries', () => {
  let mockUrl
  let mockCountries
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.url.com'
    mockDispatch = jest.fn()
    mockCountries = {"name": "Mexico",
          "topLevelDomain": [
              ".mx"
          ],
          "alpha2Code": "MX",
          "alpha3Code": "MEX",
          "callingCodes": [
              "52"
          ],
          "capital": "Mexico City",
          "altSpellings": [
              "MX",
              "Mexicanos",
              "United Mexican States",
              "Estados Unidos Mexicanos"
          ],
          "region": "Americas",
          "subregion": "Central America",
          "population": 122273473,
          "latlng": [
              23.0,
              -102.0
          ],
          "demonym": "Mexican",
          "area": 1964375.0,
          "gini": 47.0,
          "timezones": [
              "UTC-08:00",
              "UTC-07:00",
              "UTC-06:00"
          ],
          "borders": [
              "BLZ",
              "GTM",
              "USA"
          ],
          "nativeName": "México",
          "numericCode": "484",
          "currencies": [
              {
                  "code": "MXN",
                  "name": "Mexican peso",
                  "symbol": "$"
              }
          ],
          "languages": [
              {
                  "iso639_1": "es",
                  "iso639_2": "spa",
                  "name": "Spanish",
                  "nativeName": "Español"
              }
          ],
          "translations": {
              "de": "Mexiko",
              "es": "México",
              "fr": "Mexique",
              "ja": "メキシコ",
              "it": "Messico",
              "br": "México",
              "pt": "México",
              "nl": "Mexico",
              "hr": "Meksiko",
              "fa": "مکزیک"
          },
          "flag": "https://restcountries.eu/data/mex.svg",
          "regionalBlocs": [
              {
                  "acronym": "PA",
                  "name": "Pacific Alliance",
                  "otherAcronyms": [],
                  "otherNames": [
                      "Alianza del Pacífico"
                  ]
              },
              {
                  "acronym": "NAFTA",
                  "name": "North American Free Trade Agreement",
                  "otherAcronyms": [],
                  "otherNames": [
                      "Tratado de Libre Comercio de América del Norte",
                      "Accord de Libre-échange Nord-Américain"
                  ]
              }
          ],
          "cioc": "MEX"}
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        countries: mockCountries
      })
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = fetchCountries(mockUrl)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', () => {
    const thunk = fetchCountries(mockUrl)

    thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))

    const thunk = fetchCountries(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = fetchCountries(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setCountries with the correct params', async () => {
    const thunk = fetchCountries(mockUrl)

    mockDispatch = jest.fn().mockImplementation(() => mockCountries)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setCountries(mockCountries))
  })
})
