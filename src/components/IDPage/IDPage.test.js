import React from 'react';
import IDPage from './IDPage';
import StoryArea from '../StoryArea/StoryArea'
import MissionArea from '../MissionArea/MissionArea'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from '../../reducers/index.js'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('IDPage', () => {
  it('should render a storyArea component', () => {
    const store = createStore(rootReducer)
    const mockIdentityNumber = '2'
    Enzyme.configure({ adapter: new Adapter() })
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <IDPage id={mockIdentityNumber}/>
        </BrowserRouter>
      </Provider>
    )

    const currentIdentity = {
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
    const currentCountry = 'Madagascar'
    console.log(wrapper.props())
    expect(wrapper.props().id).toEqual("2")
  });

    // check if IDPage component receives correct props
    //IDPage does not render anything directly.
    // Takes props(id) and finds the currentIdentity and currentCountry
    // uses CI and CC to render StoryArea and MissionArea as props

});

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
