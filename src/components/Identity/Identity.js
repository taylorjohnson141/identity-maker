import './Identity.css';
import {Link} from 'react-router-dom'
const Identity = (prop) => {
  let {id} = prop
  return (
    <Link>
      <section id = {id.id}>
        <img alt = 'spy-pic' />
        <h3 className ='last-name' >Last Name</h3>
        <h2>{id['last-name']}</h2>
        <h3>First Name</h3>
        <h2>{id['first-name1']}</h2>
      </section>
    </Link>
  );
}

export default Identity;
