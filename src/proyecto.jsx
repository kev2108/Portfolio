import "./proyecto.css";
import estrella from "/Star.png";
import logo from "/logoCaasita.png";
import foto1 from "/foto1.png";
import foto2 from "/foto2.png";
import iconIg from "/logoIg.png";

export default function ProyectoDestacado() {
  return (
    <section className="proyecto-section">

      <div className="proyecto-title">
        <img src={estrella} className="star-icon" />
        <h2>Proyecto destacado</h2>
        <img src={estrella} className="star-icon" />
      </div>

      <div className="proyecto-card">

        <div className="proyecto-left">
          <img src={logo} className="proyecto-logo" />
        </div>

        <div className="proyecto-right">
          <h3 className="proyecto-name">CAAsita</h3>

          <p className="proyecto-text">
        CAAsita es un software educativo diseñado para acompañar el desarrollo de niños y niñas que presentan una discapacidad motriz 
        que suele afectar el lenguaje. Su propósito es entrenarlos mediante el uso de la Comunicación Aumentativa Alternativa (CAA), 
        promoviendo el aprendizaje, la exploración y la comunicación mediante una experiencia digital adaptada y accesible. 
        A través de juegos interactivos, animaciones y estímulos visuales diseñados especialmente para este público, 
        CAAsita busca fortalecer las habilidades de atención, control visual y respuesta intencional para poder llegar a un control total
        del dispositivo de seguimiento ocular.          
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
              <img src={iconIg} className="ig-icon" />
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

      <div className="proyecto-fotos">
        <img src={foto1} className="proyecto-foto" />
        <img src={foto2} className="proyecto-foto" />
      </div>

    </section>
  );
}
