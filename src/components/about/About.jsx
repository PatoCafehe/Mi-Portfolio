import './about.css';
import ME from '../../assets/mia-2.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderOpened } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h4>Algo para saber</h4>
      <h1>Sobre Mi</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="foto mia"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experiencia</h4>
              <small>Mas de un año de capacitación continua</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h4>Proyectos</h4>
              <small>10+ Completados</small>
            </article>
          </div>
          <p>
            Soy un desarrollador FrontEnd autodidacta desde hace mas de un año a la fecha, en la actualidad me encuentro buscando mi primer oportunidad laboral en IT. 
            Conocí esta carrera por el consejo de un amigo y en la actualidad, he descubierto cuanto me apasiona. He realizado varios proyectos y hoy en día sigo creando para continuar avanzando. Vivo en la ciudad de La Plata, Buenos Aires, Argentina.
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
