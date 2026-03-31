import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <Navbar />

      <div className="hero-content">
        <h1>AI Ads that win.</h1>
        <p className="subtitle">
          Paste a product URL. Get 10 video ads. Test what
          converts—automatically.
        </p>
        <p className="subtext">(yes, it&apos;s really that simple)</p>

        <a href="#" className="btn-cta">
          <div className="icon-box">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3L11 8L5 13"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="label">Create your first ad free</span>
        </a>
      </div>
    </section>
  );
}
