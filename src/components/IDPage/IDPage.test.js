import React from 'react';
import IDPage from './IDPage';
import StoryArea from '../StoryArea/StoryArea'
import { screen, render } from '@testing-library/react';
import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// describe('IDPage', () => {
//   // const mockStore = createStore(reducer, {identity: []});
//   // const getWrapper = () => mount(
//   //   <Provider store={mockStore}>
//   //     <IDPage />
//   //   </Provider>
//   // )
//
//   it('should render a storyArea', () => {
//     render(<IDPage />)
//     const currentIdentity = 'Michael Scarn'
//     const currentCountry = 'Madagascar'
//     const wrapper = shallow(
//       <StoryArea currentIdentity={currentIdentity} currentCountry={currentCountry} />
//     )
//
//     expect(wrapper.prop('currentIdentity')).toEqual(currentIdentity);
//   });
// });
