import React from 'react'
import './IDArea.css';
import Identity from '../Identity/Identity.js';
import {useSelector} from 'react-redux'


const IDArea = () => {
  let identities = useSelector(state => {
    return state.identities
  })
  let createdIdentities = identities.map(identity =>{
    return <Identity identities = {identity} />
  })
  return (
    <section>
     {createdIdentities}
    </section>
  );
}

export default IDArea;
