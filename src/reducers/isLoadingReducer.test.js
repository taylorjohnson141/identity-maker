import {isLoading} from './setCountriesReducer'
import expect from 'expect'
describe('isLoading',() =>{
  let dummyAction = {
    type:'dummy-Action'
  }
  it('should return false if input action.type !== IS_LOADING',() =>{
    expect(isLoading(undefined,dummyAction)).toBe(false)
  })
})

// export const isLoading = (state = false, action) => {
//   switch(action.type) {
//     case 'IS_LOADING':
//       return action.isLoading
//     default:
//       return state
//   }
// }
