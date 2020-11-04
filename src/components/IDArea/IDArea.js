import React from 'react'
import './IDArea.css';
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
    return <section className='id-area'><h1>Make an ID</h1></section>
  }
  return (
    <section className='id-area'>
     {createdIdentities}
    </section>
  );
}

export default IDArea;
