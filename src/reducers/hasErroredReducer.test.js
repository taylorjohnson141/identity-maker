import {hasErrored} from './setCountriesReducer'
import expect from 'expect'
describe('has Errored',() => {
  let dummyAction = {
    type:'Dummy-Action'
  }
  let goodAction = {
    type:'HAS_ERRORED',
    message: 'ERROR'
  }
  it('Should return an empty string if action.type !== HAS_ERRORED', () =>{
    expect(hasErrored(undefined,dummyAction)).toBe('')
  })
  it('Should return an error message if action.type === HAS_ERRORED', () =>{
    expect(hasErrored(undefined,goodAction)).toBe('ERROR')
  })
})
