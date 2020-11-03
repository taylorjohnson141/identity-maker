import React from 'react';
import IDPage from './IDPage';
import StoryArea from '../StoryArea/StoryArea'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from '../../reducers/index.js'

describe('IDPage', () => {
  it('should render a storyArea', () => {
    const store = createStore(rootReducer)
    const mockIdentityNumber = '2'

    render(
      <Provider store={store}>
        <BrowserRouter>
          <IDPage id={mockIdentityNumber}/>
        </BrowserRouter>
      </Provider>
    )

    //IDPage does not render anything directly.
    // Takes props(id) and finds the currentIdentity and currentCountry
    // uses CI and CC to render StoryArea and MissionArea

  });
});
