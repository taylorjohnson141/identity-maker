import './Identity.module.css';
import {Link} from 'react-router-dom'
const Identity = (prop) => {
  let identities = prop.identities
  return (
    <Link to = {`/${String(identities.id)}`}>
      <section >
        <img alt = 'spy-pic' />
        <h3 className ='last-name' >Last Name</h3>
        <h2>{identities['last-name']}</h2>
        <h3>First Name</h3>
        <h2>{identities['first-name1']}</h2>
      </section>
    </Link>
  );
}

export default Identity;
