import {addID} from './addIDReducer'
import expect from 'expect'

describe('addID', () =>{
  let action = {
    type:'SOME-THING'
  }
  let rightAction = {
    type:'ADD_ID',
    identity:{id:1,name:'John'}
  }
  it('should return an empty array if action.type !== ADD_ID',()=>{
    expect(addID(undefined,action)).toHaveLength(0)
  })
  it('should return a array with a value if action.type === ADD_ID',()=>{
    expect(addID(undefined,rightAction)).toStrictEqual([{id:1,name:'John'}])
  })
  it('should be able to add to state if state is defined',()=>{
    expect(addID([{id:2,name:'Kurt'}],rightAction)).toStrictEqual([{id:2,name:'Kurt'},{id:1,name:'John'}])
  })
  it('should be able to add multiple identites',()=>{
    addID([{id:2,name:'Kurt'}],rightAction)
    expect(addID([{id:2,name:'Kurt'},{id:1,name:'John'}],rightAction)).toStrictEqual([{id:2,name:'Kurt'},{id:1,name:'John'},{id:1,name:'John'}])

  })
})

// addID = (state = [], action) => {
//   if(action.type === 'ADD_ID'){
//     return [...state, {id: action.id, ...action.identity}]
//   }
//   return state
// }
