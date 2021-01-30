import { combineReducers } from 'redux';
import { isLoading, hasErrored, countries } from './setCountriesReducer';
import  {addId} from './addIdReducer.js';

const rootReducer = combineReducers({
  countries,
  identities: addId,
  isLoading,
  error: hasErrored
});


export default rootReducer;
