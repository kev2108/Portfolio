import "./portfolio.css";

export default function App() {
  return (
    <div className="portfolio-container">
      <div className="line top">
        <span className="star">✦</span>
      </div>

      <div className="content">
        <h1 className="titulo">PORTFOLIO</h1>
        <h2 className="subtitulo">Kevin David Daniel Dana</h2>
      </div>

      <div className="line top">
        <img src="/Star.png" alt="star" className="star" />
    </div>

    <div className="line bottom">
      <img src="/Star.png" alt="star" className="star" />
    </div>

      <span className="año">2025</span>
    </div>
  );
}
