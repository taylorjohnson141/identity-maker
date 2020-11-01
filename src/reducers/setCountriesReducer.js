export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message
    default:
      return state
  }
}

export const countries = (state = [], action) => {
  switch(action.type) {
    case 'SET_COUNTRIES':
      return action.countries
    default:
      return state
  }
}
