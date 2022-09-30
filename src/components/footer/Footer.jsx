import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Pato Cafehe
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre Mi</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/patricio.cafehe" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/pato22_lp/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/PatricioCafehe" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
