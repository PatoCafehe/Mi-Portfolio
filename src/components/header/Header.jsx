import Cta from './Cta';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/img-header.jpg';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hola Soy</h3>
        <h1>Patricio Cafehe</h1>
        <h4 className="text-light">Desarrollador Frontend</h4>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="foto mia" width="100%"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
