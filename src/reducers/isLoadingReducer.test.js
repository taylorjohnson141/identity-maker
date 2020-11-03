import {isLoading} from './setCountriesReducer'
import expect from 'expect'
describe('isLoading',() =>{
  let dummyAction = {
    type:'dummy-Action'
  }
  let goodAction1 = {
    type:'IS_LOADING',
    isLoading:true
  }
  let goodAction2 = {
    type:'IS_LOADING',
    isLoading:false
  }
  it('should return false if input action.type !== IS_LOADING',() =>{
    expect(isLoading(undefined,dummyAction)).toBe(false)
  })
  it('should return action.state if input action.type === IS_LOADING',() =>{
    expect(isLoading(undefined,goodAction1)).toBe(true)
    expect(isLoading(undefined,goodAction2)).toBe(false)
  })

})

