import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const boolean = true || false

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: boolean
    }

    const result = actions.isLoading(boolean);

    expect(result).toEqual(expectedAction)
  })

})
