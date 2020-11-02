import './IDPage.css';
import MissionArea from '../MissionArea/MissionArea.js';
import StoryArea from '../StoryArea/StoryArea.js';
import Identity from '../Identity/Identity';
import { useSelector } from 'react-redux';

const IDPage = (props) => {
  const {idNumber} = props
  let currentIdentity = useSelector(state => state.identities.find(identity => {
    console.log(identity.id)
    return identity.id === parseInt(idNumber)} ))
  let currentCountry = useSelector(state => state.countries.find(country => country.name === currentIdentity.country))
 if(!currentCountry){
   console.log(currentIdentity)
   return <h1>Loading!</h1>
 }

  return (
    <section>
      <h3>Your Backstory</h3>
      <StoryArea currentIdentity = {currentIdentity}  currentCountry ={currentCountry}/>
      <h3>Your Mission</h3>
      <MissionArea currentCountry ={currentCountry}/>
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
