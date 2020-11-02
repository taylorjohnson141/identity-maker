import "@testing-library/jest-dom";
import { fetchCountries } from './fetchCountries'
jest.mock('./fetchCountries')

describe('fetchCountries', () => {
  beforeEach(() => {
    const fetchValue = fetchCountries.mockResolvedValue({"name": "Mexico",
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
          "cioc": "MEX"})
  })

  it('dispatches isLoading', async () => {
    const isLoading = jest.fn()
    const dispatch = jest.fn()
    const fetchCountries = jest.fn()
    await fetchCountries('url')(dispatch)

    expect(dispatch).toHaveBeenCalledWith(isLoading())
  })

  it('should dispatch setCountries when the fetch is successful', async () => {
    const setCountries= jest.fn()
    const dispatch = jest.fn()
    const fetchCountries = jest.fn()
    await fetchCountries('url')(dispatch)

    expect(dispatch).toHaveBeenCalledWith(setCountries(fetchValue))
  })

  it('dispatches error when the fetch fails', () => {
    const error = new Error('FAIL')
    fetchCountries.mockResolvedValue(error)
  })
})
