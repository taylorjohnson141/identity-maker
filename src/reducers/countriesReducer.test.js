import {countries} from './setCountriesReducer'
import expect from 'expect'
describe('countries',() =>{
  let dummyAction = {
    type:'Dummy-Action'
  }
it('should return an empty array if action.type !==SET_COUNTRIES',() =>{
  expect(countries(undefined,dummyAction)).toHaveLength(0)
})
})
// export const countries = (state = [], action) => {
//   switch(action.type) {
//     case 'SET_COUNTRIES':
//       return action.countries
//     default:
//       return state
//   }
// }