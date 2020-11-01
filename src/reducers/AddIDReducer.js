export const addID = (state = [], action) => {
  if(action.type === 'ADD_ID'){
    return [...state, {id: action.id, ...action.identity}]
  }
  return state
}
