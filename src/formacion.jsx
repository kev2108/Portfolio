import "./Formacion.css";
import estrella from "/Star.png";

export default function Formacion() {
  return (
    <div className="formacion-container">
      <div className="formacion-title">
        <img src={estrella} alt="star" className="star-icon" />
        <h2>Formación</h2>
        <img src={estrella} alt="star" className="star-icon" />
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>

        {/* 2020 - 2025 */}
        <div className="timeline-item">
          <div className="timeline-year">2020 - 2025</div>
          <div className="timeline-dot"></div>

          <div className="timeline-text">
            <p><strong>Escuela Secundaria ORT Belgrano</strong></p>
            <p><strong>Especialidad:</strong> Tecnología de la Información y la Comunicación</p>
            <p><strong>Reconocimiento:</strong> Mejor promedio de la especialidad</p>
          </div>
        </div>

        {/* 2023 */}
        <div className="timeline-item">
          <div className="timeline-year">2023</div>
          <div className="timeline-dot"></div>

          <div className="timeline-text">
            <p><strong>Intercambio Goldsmiths College (Londres)</strong></p>
            <p>
              Programa intensivo de 2 semanas donde fortalecí mi inglés en
              situaciones reales con hablantes nativos.
            </p>

            <br />

            <p><strong>Certificado de inglés Cambridge B2 (First)</strong></p>
            <p>
              Acreditación internacional que certifica un nivel
              intermedio-alto del idioma en comprensión, conversación y escritura.
            </p>
          </div>
        </div>

        {/* 2024 */}
        <div className="timeline-item">
          <div className="timeline-year">2024</div>
          <div className="timeline-dot"></div>

          <div className="timeline-text">
            <p><strong>Certificado de inglés Cambridge C1 (Advanced)</strong></p>
            <p>
              Acreditación internacional que valida un nivel avanzado del idioma
              en comprensión, expresión oral y escrita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
