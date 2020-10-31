import './Header.css';
import SpyIcon from '../../Images/spyIcon.png';

const Header = () => {
  return (
    <section className='header-section'>
      <section className='background'>
        <img alt='spy-icon' src={SpyIcon} />
      <h1>Welcome, Agent</h1>
      </section>
    </section>
  );
}

export default Header;
