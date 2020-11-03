import React from 'react'
import './IDArea.module.css';
import Identity from '../Identity/Identity.js';
import {useSelector} from 'react-redux';


const IDArea = () => {
  let identities = useSelector(state => {
    return state.identities
  })
  let createdIdentities = identities.map((identity, index)=>{
    return <Identity
    key={index}
    identities={identity}
    />
  })
  if(createdIdentities.length === 0){
    return <h1>Make an ID</h1>
  }
  return (
    <section>
     {createdIdentities}
    </section>
  );
}

export default IDArea;
