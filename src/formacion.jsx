import "./Formacion.css";
import estrella from "/Star.png";

export default function Formacion() {
  return (
    <div className="formacion-container">
      {/* Título con estrellas */}
      <div className="formacion-title">
        <img src={estrella} alt="star" className="star-icon" />
        <h2>Formación</h2>
        <img src={estrella} alt="star" className="star-icon" />
      </div>

      {/* Timeline */}
      <div className="timeline">
        {/* Línea vertical continua */}
        <div className="timeline-line"></div>

        <div className="timeline-item">
          <div className="timeline-year">2023</div>
          <div className="timeline-dot"></div>
          <div className="timeline-text">
            Intercambio Goldsmith College
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">
            2020
            <br />
            <span className="dash">–</span>
            <br />
            2025
        </div>
          <div className="timeline-dot"></div>
          <div className="timeline-text">
            <p>Escuela secundaria ORT Belgrano:</p>
            <p><strong>Mejor promedio</strong> de la especialidad Tecnologías de la
            Información y Comunicación</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <div className="timeline-dot"></div>
          <div className="timeline-text">
            Certificado inglés Cambridge C1
          </div>
        </div>
      </div>
    </div>
  );
}
