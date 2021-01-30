import * as actions from '../actions'

describe('actions', () => {
  it.skip('should have a type of ADD_ID', () => {
    const identity = {
      color: 'red',
      company: 'Bic',
      country: 'Belguim',
      firstName1: 'John',
      firstName2: 'Wayne',
      firstName3: 'Pilgrim',
      game: 'backgammon',
      genre1: 'mystery',
      genre2: 'comedy',
      lasName: 'Funkstein',
      numbers1: 2,
      numbers2: 5,
      occupation: 'inspector',
      pluralAnimal: 'zebras',
      singularAnimal: 'moose',
      sport: 'rugby',
      zooAnimal: 'lemur'
    };

    const expectedAction = {
      type: 'ADD_ID',
      id: Date.now(),
      identity: identity
    };

    const result = actions.addID(identity);

    expect(result).toEqual(expectedAction);
  });
});
