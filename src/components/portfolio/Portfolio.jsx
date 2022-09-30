import './portfolio.css';
import CRY from '../../assets/crypto.png';
import VET from '../../assets/pacientes-vet.png';
import CRM from '../../assets/crm-1.png';
import SEG from '../../assets/seguro.png';
import QUI from '../../assets/quiosco.png';

const data = [
  {
    id: 1,
    Image: QUI,
    title: 'Quiosco online',
    github: 'https://github.com/PatoCafehe/quioscoApp',
    demo: 'https://quioscoapp-production-993e.up.railway.app/',
  },
  {
    id: 2,
    Image: CRY,
    title: 'Cotizador de Criptomonedas',
    github: 'https://github.com/PatoCafehe/Cotizador-de-Criptos-con-react',
    demo: 'https://calm-quokka-910580.netlify.app/',
  },
  {
    id: 3,
    Image: VET,
    title: 'Pacientes de Veterinaria',
    github: 'https://github.com/PatoCafehe/citas_react',
    demo: 'https://calm-narwhal-faa179.netlify.app/',
  },
  {
    id: 4,
    Image: CRM,
    title: 'Crm-Clientes',
    github: 'https://github.com/PatoCafehe/app-crm',
    demo: 'https://musical-chimera-5c0d3c.netlify.app/clientes',
  },
  {
    id: 5,
    Image: SEG,
    title: 'Cotizador de Seguro de Automovil',
    github: 'https://github.com/PatoCafehe/Cotizador-de-Seguro',
    demo: 'https://glittery-figolla-7331e4.netlify.app/',
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Trabajos Recientes</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
