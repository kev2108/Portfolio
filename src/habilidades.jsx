import "./habilidades.css";
import estrella from "/Star.png";
import estrellaAzul from "/starAzul.png";

export default function Habilidades() {

  const habilidades = [
    "Liderazgo y trabajo en equipo",
    "Resolución de problemas",
    "Comunicación efectiva",
    "Pensamiento creativo",
    "Gestión de proyectos",
    "Aprendizaje autónomo",
  ];

  return (
    <section className="habilidades-section">
      <div className="habilidades-title">
        <img src={estrella} className="star-icon" />
        <h2>Habilidades</h2>
        <img src={estrella} className="star-icon" />
      </div>

      <div className="carousel-container">
        <div className="carousel-track">

          {}
          {habilidades.map((habilidad, i) => (
            <div className="habilidad-card" key={i}>
              <img src={estrellaAzul} className="star-small" />
              <p>{habilidad}</p>
            </div>
          ))}

          {}
          {habilidades.map((habilidad, i) => (
            <div className="habilidad-card" key={`dup-${i}`}>
              <img src={estrellaAzul} className="star-small" />
              <p>{habilidad}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
