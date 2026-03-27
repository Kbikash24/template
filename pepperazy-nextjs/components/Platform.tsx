export default function Platform() {
  return (
    <section className="platform-section">
      <h2>
        The #1 AI Ad Platform
        <br />
        Built for Performance
      </h2>
      <p className="platform-sub">
        Turn any product page into a winning video ad—created, tested, and
        optimized in minutes.
      </p>

      <div className="platform-layout">
        <div className="ad-grid-mock">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="ad-mock-card">
              <div className={`ad-mock-thumb t${i}`}>
                <div className="play-btn">
                  <svg viewBox="0 0 10 10">
                    <path d="M2 1L8 5L2 9V1Z" fill="white" />
                  </svg>
                </div>
                <span className="brand-tag">Brand Name</span>
                {i === 1 && <span className="new-badge">NEW</span>}
              </div>
              <div className="ad-mock-body">
                <p>Transform your product into stunning video ads</p>
                <button className="ad-mock-btn">SHOP NOW</button>
                <button className="ad-mock-btn outline">LEARN MORE</button>
              </div>
            </div>
          ))}
        </div>

        <div className="platform-info">
          <div className="platform-tag">
            <div className="tag-icon">
              <svg viewBox="0 0 22 22" fill="currentColor">
                <path d="M11 2L13 8H19L14 12L16 18L11 14L6 18L8 12L3 8H9L11 2Z" />
              </svg>
            </div>
            <div className="tag-label">AI-Powered</div>
          </div>

          <h3>10,000+ winning ad templates built from real data</h3>

          <ul className="platform-bullets">
            <li>
              Automatically generate 10+ video variations from any product page
            </li>
            <li>
              AI learns from your top-performing ads to create better variants
            </li>
            <li>Deploy directly to Meta, TikTok, and YouTube in seconds</li>
          </ul>

          <a href="#" className="btn-browse">
            <div className="icon-box">
              <svg viewBox="0 0 16 16">
                <path
                  d="M6 3L11 8L6 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <span className="lbl">Browse Examples</span>
          </a>
        </div>
      </div>
    </section>
  );
}
