import './IDPage.css';
import MissionArea from '../MissionArea/MissionArea.js';
import StoryArea from '../StoryArea/StoryArea.js';
import { useEffect } from 'react';
import Identity from '../Identity/Identity';
import { useSelector } from 'react-redux';

const IDPage = (props) => {
  const {idNumber} = props
  useEffect(idNumber => {
    let currentIdentity= useSelector(state => state.identities.find(identity => identity.id === idNumber ))
    let currentCountry = useSelector(state => state.countries.find(county => county.name === currentIdentity.county))

  },[idNumber])
  return (
    <section>
      <h2>Name's Identity</h2>
      <h3>Your Backstory</h3>
      <StoryArea />
      <h3>Your Mission</h3>
      <MissionArea />
    </section>
  );
}

export default IDPage;
//will use useSelector hook for connecting state.
// use Identity Card name to interpolate the header---'name''s identity
//action type = GRAB_IDENTITY
//action payload ?
//will need access to IDReducer to get name
// OR
//reducer case GRAB_IDENTITY:
// reducer return [identity card with matching id]
