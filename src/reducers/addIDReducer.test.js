import addID from './addIDReducer'
import expect from 'expect'
describe('addID', () =>{
  let action = {
    type:'SOME-THING'
  }
  it('should return and empty array if action.type !== ADD_ID',()=>{
    expect(addID(action)).toHaveLength(0)
  })
})

addID = (state = [], action) => {
  if(action.type === 'ADD_ID'){
    return [...state, {id: action.id, ...action.identity}]
  }
  return state
}
