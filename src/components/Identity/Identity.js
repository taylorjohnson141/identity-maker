import React from 'react';
import './Identity.css';
import {Link} from 'react-router-dom';
import Silhouette from '../../Images/silhouette.png';

const Identity = (prop) => {
  let identities = prop.identities
  return (
    <Link to = {`/${String(identities.id)}`}>
      <section className='identity'>
        <img alt = 'spy-pic' src={Silhouette} />
        <div className='last'>
          <h3 className ='last-name' >LAST NAME</h3>
          <h2>{identities['last-name']}</h2>
        </div>
        <div className='first'>
          <h3 className='first-name'>FIRST NAME</h3>
          <h2>{identities['first-name1']}</h2>
        </div>
        <div className='country'>
          <h3 className='country-origin'>COUNTRY OF ORIGIN</h3>
          <h2>{identities['country']}</h2>
        </div>
      </section>
    </Link>
  );
}

export default Identity;
