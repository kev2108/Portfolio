import "./Portfolio.css";
import About from "./sobreMi.jsx";
import Formacion from "./formacion.jsx";
import Habilidades from "./habilidades.jsx";
import Contacto from "./contact.jsx";
import ProyectoDestacado from "./proyecto.jsx";

export default function App() {
  return (
    <>
      <div className="portfolio-container">
        <div className="line top">
          <img src="/Star.png" alt="star" className="star" />
        </div>

        <div className="content">
          <h1 className="title">PORTFOLIO</h1>
          <h2 className="subtitle">Kevin David Daniel Dana</h2>
        </div>

        <div className="line bottom">
          <img src="/Star.png" alt="star" className="star" />
        </div>

        <span className="year">2025</span>
      </div>
      <About />
      <Formacion />
      <Habilidades />
      <ProyectoDestacado />
      <Contacto />
    </>
  );
}
