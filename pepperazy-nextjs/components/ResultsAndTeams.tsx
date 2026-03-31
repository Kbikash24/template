export default function ResultsAndTeams() {
  return (
    <>
      {/* REAL RESULTS SECTION */}
      <section className="res-sec">
        <div className="res-card">
          <div className="res-left">
            <h2>Real results from real brands</h2>
            <p className="res-desc">
              Thousands of brands are using Pepperazy to create, test, and scale
              winning video ads.
            </p>
          </div>
          <div className="res-right">
            <div className="res-row">
              <div className="res-num">3.2x</div>
              <div className="res-desc">
                Average ROAS improvement in first 30 days
              </div>
            </div>
            <div className="res-row">
              <div className="res-num">72%</div>
              <div className="res-desc">
                Reduction in creative production time
              </div>
            </div>
            <div className="res-row">
              <div className="res-num">5.8x</div>
              <div className="res-desc">
                More ad variations tested per campaign
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PEPPERAZY HELPS REAL TEAMS */}
      <section className="teams-sec">
        <div className="teams-hdr">
          <h2>How Pepperazy helps real teams</h2>
          <div className="tnav">
            <button>
              <svg viewBox="0 0 16 16">
                <path d="M10 3L5 8L10 13" />
              </svg>
            </button>
            <button>
              <svg viewBox="0 0 16 16">
                <path d="M6 3L11 8L6 13" />
              </svg>
            </button>
          </div>
        </div>

        <div className="tcards">
          <div className="tcard">
            <span className="tc-bdg">E-COMMERCE</span>
            <div className="tc-sts">
              <div>
                <div className="tc-sn">$1.2M</div>
                <div className="tc-sl">Revenue in 90 days</div>
              </div>
              <div>
                <div className="tc-sn">4.5x</div>
                <div className="tc-sl">ROAS</div>
              </div>
            </div>
            <div className="tc-br">Skincare Brand</div>
            <a href="#" className="tc-rd">
              Read Case Study →
            </a>
          </div>

          <div className="tcard">
            <span className="tc-bdg">AGENCY</span>
            <div className="tc-sts">
              <div>
                <div className="tc-sn">200+</div>
                <div className="tc-sl">Clients managed</div>
              </div>
              <div>
                <div className="tc-sn">80%</div>
                <div className="tc-sl">Time saved</div>
              </div>
            </div>
            <div className="tc-br">Digital Agency</div>
            <a href="#" className="tc-rd">
              Read Case Study →
            </a>
          </div>

          <div className="tcard">
            <span className="tc-bdg">DTC BRAND</span>
            <div className="tc-sts">
              <div>
                <div className="tc-sn">500K</div>
                <div className="tc-sl">New customers</div>
              </div>
              <div>
                <div className="tc-sn">$8M</div>
                <div className="tc-sl">Ad spend</div>
              </div>
            </div>
            <div className="tc-br">Fashion Brand</div>
            <a href="#" className="tc-rd">
              Read Case Study →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
