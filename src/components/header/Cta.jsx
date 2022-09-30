import CV from '../../assets/Patricio Nazareno Cafehe.pdf';
const Cta = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Charlemos
      </a>
    </div>
  );
};

export default Cta;
