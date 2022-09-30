import './nav.css';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        href="#portfolio"
      >
        <MdOutlineWorkOutline />
      </a>
      <a
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        href="#contact"
      >
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
