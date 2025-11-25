import "./proyecto.css";
import estrella from "/Star.png";
import logo from "/logoCaasita.png";
import foto1 from "/foto1.png";
import foto2 from "/foto2.png";

export default function ProyectoDestacado() {
  return (
    <section className="proyecto-section">

      {/* Título */}
      <div className="proyecto-title">
        <img src={estrella} className="star-icon" />
        <h2>Proyecto destacado</h2>
        <img src={estrella} className="star-icon" />
      </div>

      {/* TARJETA COMPLETA */}
      <div className="proyecto-card">

        <div className="proyecto-left">
          <img src={logo} className="proyecto-logo" />
        </div>

        <div className="proyecto-right">
          <h3 className="proyecto-name">CAAsita</h3>

          <p className="proyecto-text">
            Software educativo diseñado para acompañar el desarrollo de niños y niñas con una
            edad cognitiva entre tres y seis años que presentan una discapacidad motriz que
            afecta el lenguaje. Su propósito es entrenarlos mediante el uso de la Comunicación
            Aumentativa Alternativa (CAA), ofreciendo una experiencia accesible compatible con seguimiento ocular.
          </p>

          <p className="proyecto-rol">
            <strong>Mi rol:</strong> Game developer
          </p>

          <div className="proyecto-bottom">
            <a
              className="proyecto-ig"
              href="https://instagram.com/caasita.ok"
              target="_blank"
            >
              @caasita.ok
            </a>

            <a href="https://caasita.vercel.app/"
              target="_blank"
              className="proyecto-btn"
            >
             Pruébalo
            </a>

          </div>
        </div>
      </div>

      {/* FOTOS */}
      <div className="proyecto-fotos">
        <img src={foto1} className="proyecto-foto" />
        <img src={foto2} className="proyecto-foto" />
      </div>

    </section>
  );
}
