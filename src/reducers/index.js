import { combineReducers } from 'redux';
import { isLoading, hasErrored, countries } from './setCountriesReducer'

const rootReducer = combineReducers({
  countries,
  isLoading,
  error: hasErrored
});


export default rootReducer;
