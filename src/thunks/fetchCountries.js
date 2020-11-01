import { isLoading, hasErrored, setCountries } from '../actions/index';

export const fetchCountries = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(setCountries(data))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
