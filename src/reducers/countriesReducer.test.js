import {countries} from './setCountriesReducer'
import expect from 'expect'
describe('countries',() =>{
  let dummyAction = {
    type:'Dummy-Action'
  }
  let goodAction = {
    type:'SET_COUNTRIES',
    countries : [
      {
        country:'I am a country'
      }
    ]
  }
  it('should return an empty array if action.type !== SET_COUNTRIES',() =>{
    expect(countries(undefined,dummyAction)).toHaveLength(0)
  })
  it('should return an array with country objects if type === SET_COUNTRIES',() =>{
    expect(countries(undefined,goodAction)).toStrictEqual([
      {country:'I am a country'}
    ])
  })
})
