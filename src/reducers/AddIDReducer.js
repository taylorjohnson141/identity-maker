function AddIDReducer (state = [],action){
  if(action.type === 'ADD_ID'){
    return [...state, ...action.identity ]
  }
  return state
}
export default AddIDReducer