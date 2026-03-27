export default function FeatureRows() {
  return (
    <>
      {/* CREATE SECTION */}
      <div className="feat-row-wrap">
        <div className="feat-row">
          <div className="feat-text">
            <div className="ftag">
              <div className="fi2">
                <svg viewBox="0 0 22 22" fill="white">
                  <path
                    d="M11 3V11M11 11V19M11 11H19M11 11H3"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="fl2">Create</div>
            </div>

            <h3>Turn any product into winning video ads in minutes</h3>

            <ul className="fbullets">
              <li>
                Paste any product URL and generate 10+ ad variations instantly
              </li>
              <li>AI pulls product images, copy, and features automatically</li>
              <li>Choose from thousands of proven templates and styles</li>
            </ul>

            <a href="#" className="fbtn">
              <div className="fbi2">
                <svg viewBox="0 0 14 14" fill="white">
                  <path
                    d="M4 2L10 7L4 12"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="fbl2">Try it Now</span>
            </a>
          </div>

          <div className="feat-visual">
            <div className="vis-box vis-gradient-warm">
              {/* Visual placeholder */}
            </div>
          </div>
        </div>
      </div>

      {/* LAUNCH SECTION */}
      <div className="feat-row-wrap">
        <div className="feat-row rev">
          <div className="feat-text">
            <div className="ftag">
              <div className="fi2">
                <svg viewBox="0 0 22 22" fill="white">
                  <path d="M11 3L13 9L19 11L13 13L11 19L9 13L3 11L9 9L11 3Z" />
                </svg>
              </div>
              <div className="fl2">Launch</div>
            </div>

            <h3>Deploy to all platforms with one click</h3>

            <ul className="fbullets">
              <li>Publish directly to Meta, TikTok, and YouTube</li>
              <li>Automatic format optimization for each platform</li>
              <li>Sync budgets and targeting across all channels</li>
            </ul>

            <a href="#" className="fbtn">
              <div className="fbi2">
                <svg viewBox="0 0 14 14" fill="white">
                  <path
                    d="M4 2L10 7L4 12"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="fbl2">See The Platform</span>
            </a>
          </div>

          <div className="feat-visual">
            <div className="vis-box vis-gradient-purple">
              {/* Visual placeholder */}
            </div>
          </div>
        </div>
      </div>

      {/* OPTIMIZE SECTION */}
      <div className="feat-row-wrap">
        <div className="feat-row">
          <div className="feat-text">
            <div className="ftag">
              <div className="fi2">
                <svg viewBox="0 0 22 22" fill="white">
                  <path
                    d="M3 11H19M11 3V19"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="fl2">Optimize</div>
            </div>

            <h3>AI automatically tests and optimizes for peak performance</h3>

            <ul className="fbullets">
              <li>
                Smart A/B testing finds your best performers automatically
              </li>
              <li>Real-time budget allocation to top-converting ads</li>
              <li>Continuous learning improves results over time</li>
            </ul>

            <a href="#" className="fbtn">
              <div className="fbi2">
                <svg viewBox="0 0 14 14" fill="white">
                  <path
                    d="M4 2L10 7L4 12"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="fbl2">Learn More</span>
            </a>
          </div>

          <div className="feat-visual">
            <div className="vis-box vis-gradient-warm">
              {/* Visual placeholder */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
