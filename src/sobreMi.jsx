import "./sobreMi.css";
import foto from "./assets/fotoKevin.png"; // reemplazá con el nombre real de tu imagen

export default function About() {
  return (
    <section className="about-container">
      <h2 className="about-title">
        <img src="/Star.png" alt="star" className="star-icon" />
        Acerca de mí
        <img src="/Star.png" alt="star" className="star-icon" />
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Me llamo Kevin y vivo en Palermo, Ciudad Autónoma de
            Buenos Aires.
          </p>
          <p>
            Me gusta aprender cosas nuevas, conocer personas de distintos
            lugares y compartir ideas que generen un impacto positivo. Me
            interesa la tecnología como una herramienta para crear, conectar y
            ayudar. Disfruto participar en proyectos con propósito y seguir
            creciendo a través de cada experiencia.
          </p>
        </div>

        <img src={foto} className="about-photo" />
      </div>
    </section>
  );
}
