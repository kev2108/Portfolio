import "./contact.css";
import estrella from "/Star.png";
import mailIcon from "/mail.png";
import linkedinIcon from "/linkedin.png";

export default function Contacto() {
  return (
    <section className="contacto-section">
      <div className="contacto-title">
        <img src={estrella} className="star-contact" />
        <h2>¡TRABAJEMOS JUNTOS!</h2>
        <img src={estrella} className="star-contact" />
      </div>

      <div className="contacto-bar">

        <a
          href="mailto:kevindanieldana@gmail.com"
          className="contacto-chip"
        >
          <img src={mailIcon} className="iconM" />
          <span>kevindanieldana@gmail.com</span>
        </a>

        <a
          href="https://ar.linkedin.com/in/kevin-daniel-dana-01b0a3282"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-chip"
        >
          <img src={linkedinIcon} className="iconL" />
          <span>Kevin Daniel Dana</span>
        </a>

      </div>
    </section>
  );
}
