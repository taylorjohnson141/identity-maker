import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of HAS_ERRORED', () => {
    const message = 'Something went wrong'

    const expectedAction = {
      type: 'HAS_ERRORED',
      message: message
    }

    const result = actions.hasErrored(message);

    expect(result).toEqual(expectedAction)
  });
});
