export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div className="logo-icon">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 14L10 8M10 8L16 14M10 8V22"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 6L20 12M20 12L26 6"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="nav-pill">
        <a href="#">
          Platform <span className="chevron">▾</span>
        </a>
        <a href="#">API</a>
        <a href="#">
          Scale <span className="star">✦</span>
        </a>
        <a href="#">
          Resources <span className="chevron">▾</span>
        </a>
        <a href="#">Pricing</a>
      </div>

      <div className="nav-right">
        <button className="btn-book">BOOK DEMO</button>
        <button className="btn-create-nav">
          <div className="icon-box">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="label">Create</span>
        </button>
      </div>
    </nav>
  );
}
