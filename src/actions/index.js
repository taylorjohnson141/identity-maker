export const addID = (identity) => ({
  type: 'ADD_ID',
  identity
});

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
});

export const setCountries = (countries) => ({
  type: 'SET_COUNTRIES',
  countries
});
// export const findCountry = (country) => ({
//   type: 'FIND_COUNTRY',
//   country
// });
