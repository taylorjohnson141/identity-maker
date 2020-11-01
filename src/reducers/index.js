import { combineReducers } from 'redux';
imoprt { isLoading, hasErrored, countries } from './setCountriesReducer'

const rootReducer = combineReducers({
  countries,
  isLoading,
  error: hasErrored
});


export default rootReducer;
