import React from "react";

const CONTRACT_ADDRESS = "942BoiLyWXwBe7qSsjGWofXAVe5MTYdeyPJpba2omoon";
const TELEGRAM_LINK = "https://t.me/bored_shitless";

const signs = [
  { src: "/sign1.png", alt: "Office sign 1" },
  { src: "/sign2.png", alt: "Office sign 2" },
  { src: "/sign3.png", alt: "Office sign 3" },
  { src: "/sign4.png", alt: "Office sign 4" },
  { src: "/sign5.png", alt: "Office sign 5" },
];

const stats = [
  {
    icon: "🕒",
    title: "Clocked in",
    text: "Another day, another spreadsheet, another dream of escape.",
  },
  {
    icon: "💼",
    title: "Office mode",
    text: "Silver-and-grey corporate energy with a meme coin soul.",
  },
  {
    icon: "☕",
    title: "Low energy",
    text: "Gary the sloth understands the grind better than anyone.",
  },
  {
    icon: "🏢",
    title: "Corporate pain",
    text: "Built for everyone who has ever stared into the void of a Monday morning.",
  },
];

function copyCA() {
  navigator.clipboard.writeText(CONTRACT_ADDRESS);
  alert("Contract address copied");
}

export default function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to bottom, #d4d4d8, #e4e4e7, #f1f5f9);
          color: #18181b;
        }

        a {
          color: inherit;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
        }

        .header {
          border-bottom: 1px solid rgba(113,113,122,0.25);
          background: rgba(255,255,255,0.68);
          backdrop-filter: blur(8px);
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .header-inner {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .brand img {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .brand-title {
          font-size: 18px;
          font-weight: 700;
        }

        .brand-subtitle {
          font-size: 12px;
          color: #52525b;
        }

        .btn {
          display: inline-block;
          text-decoration: none;
          border-radius: 16px;
          padding: 12px 16px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .btn-dark {
          background: #27272a;
          color: white;
          border: none;
        }

        .btn-light {
          background: white;
          color: #18181b;
          border: 1px solid rgba(113,113,122,0.22);
        }

        .btn-outline-dark {
          color: white;
          border: 1px solid rgba(255,255,255,0.22);
        }

        .page-section {
          padding-top: 24px;
          padding-bottom: 24px;
        }

        .hero-shell,
        .card,
        .panel,
        .stat-card,
        .sign-card,
        .cta-shell {
          border: 1px solid rgba(113,113,122,0.18);
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
        }

        .hero-shell {
          overflow: hidden;
          border-radius: 32px;
          background: rgba(255,255,255,0.74);
        }

        .hero-banner {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          padding: 32px;
        }

        .pill {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(113,113,122,0.20);
          color: #52525b;
          font-size: 14px;
          margin-bottom: 22px;
        }

        .hero-title {
          font-size: 56px;
          line-height: 1;
          margin: 0 0 18px 0;
          font-weight: 900;
        }

        .hero-title span {
          display: block;
          color: #71717a;
        }

        .hero-text {
          font-size: 18px;
          line-height: 1.7;
          color: #3f3f46;
          max-width: 700px;
          margin-bottom: 22px;
        }

        .panel {
          border-radius: 32px;
          background: linear-gradient(to bottom right, #f4f4f5, #e2e8f0);
          padding: 24px;
        }

        .employee {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .employee img {
          width: 82px;
          height: 82px;
          border-radius: 24px;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .eyebrow {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #71717a;
          margin-bottom: 8px;
        }

        .employee-name {
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 6px 0;
        }

        .employee-text,
        .small-text {
          font-size: 14px;
          line-height: 1.7;
          color: #52525b;
          margin: 0;
        }

        .card {
          border-radius: 24px;
          background: rgba(255,255,255,0.86);
          padding: 18px;
          margin-bottom: 18px;
        }

        .mono {
          font-family: monospace;
          font-size: 14px;
          line-height: 1.6;
          color: #27272a;
          word-break: break-all;
        }

        .button-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .memo {
          border-radius: 24px;
          background: #18181b;
          color: #f4f4f5;
          padding: 18px;
        }

        .memo p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: #e4e4e7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          border-radius: 28px;
          background: rgba(255,255,255,0.78);
          padding: 24px;
        }

        .stat-icon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          background: #27272a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
        }

        .stat-title {
          margin: 0 0 10px 0;
          font-size: 22px;
        }

        .stat-text {
          margin: 0;
          color: #52525b;
          font-size: 14px;
          line-height: 1.7;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
        }

        .feature-card {
          border-radius: 32px;
          background: rgba(255,255,255,0.78);
          overflow: hidden;
        }

        .feature-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100%;
        }

        .feature-copy {
          padding: 32px;
        }

        .feature-title {
          font-size: 42px;
          margin: 0 0 16px 0;
        }

        .feature-copy p {
          color: #3f3f46;
          line-height: 1.8;
          margin-top: 0;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
          display: block;
        }

        .signs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .sign-card {
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255,255,255,0.82);
        }

        .sign-card img {
          width: 100%;
          min-height: 170px;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cta-shell {
          border-radius: 32px;
          background: #18181b;
          color: white;
          padding: 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-title {
          font-size: 48px;
          margin: 0 0 12px 0;
          line-height: 1.05;
        }

        .cta-text {
          margin: 0;
          color: #d4d4d8;
          line-height: 1.7;
          max-width: 700px;
        }

        @media (max-width: 1024px) {
          .hero-grid,
          .feature-grid,
          .feature-inner {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-title {
            font-size: 44px;
          }

          .feature-title,
          .cta-title {
            font-size: 36px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .header-inner {
            min-height: auto;
            align-items: flex-start;
          }

          .brand-subtitle {
            display: none;
          }

          .btn {
            padding: 11px 14px;
            border-radius: 14px;
            font-size: 14px;
          }

          .hero-shell,
          .feature-card,
          .cta-shell,
          .panel,
          .stat-card,
          .sign-card {
            border-radius: 22px;
          }

          .hero-banner {
            height: 160px;
          }

          .hero-grid,
          .feature-copy,
          .panel,
          .cta-shell {
            padding: 18px;
          }

          .hero-title {
            font-size: 32px;
            line-height: 1.05;
          }

          .hero-text {
            font-size: 16px;
          }

          .employee {
            align-items: flex-start;
          }

          .employee img {
            width: 64px;
            height: 64px;
            border-radius: 18px;
          }

          .employee-name {
            font-size: 22px;
          }

          .stats-grid,
          .signs-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 18px;
          }

          .feature-title,
          .cta-title {
            font-size: 28px;
            line-height: 1.1;
          }

          .feature-image {
            min-height: 220px;
          }

          .sign-card img {
            min-height: 140px;
          }
        }
      `}</style>

      <div>
        <header className="header">
          <div className="container">
            <div className="header-inner">
              <div className="brand">
                <img src="/logo.png" alt="$BORED logo" />
                <div>
                  <div className="brand-title">$BORED</div>
                  <div className="brand-subtitle">Corporate survival token</div>
                </div>
              </div>

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Telegram
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="page-section">
            <div className="container">
              <div className="hero-shell">
                <img
                  src="/boredbanner.png"
                  alt="BORED office banner"
                  className="hero-banner"
                />

                <div className="hero-grid">
                  <div>
                    <div className="pill">
                      Modern office vibes. Terminal burnout. Gary gets it.
                    </div>

                    <h1 className="hero-title">
                      The token for everyone
                      <span>bored of the daily grind.</span>
                    </h1>

                    <p className="hero-text">
                      $BORED captures the office-building mood: polished on the outside,
                      spiritually exhausted on the inside. Gary the sloth is here for every
                      drained commute, every fake smile, and every meeting that could have
                      been an email.
                    </p>

                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-light"
                    >
                      Join Telegram
                    </a>
                  </div>

                  <div className="panel">
                    <div className="employee">
                      <img src="/bored1.png" alt="Gary the sloth" />
                      <div>
                        <div className="eyebrow">Featured employee</div>
                        <div className="employee-name">Gary</div>
                        <p className="employee-text">
                          Head of burnout, morale, and doing the bare minimum beautifully.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="eyebrow">Contract address</div>
                      <div className="mono">{CONTRACT_ADDRESS}</div>

                      <div className="button-row">
                        <button onClick={copyCA} className="btn btn-dark" style={{ cursor: "pointer" }}>
                          Copy CA
                        </button>

                        <a
                          href={TELEGRAM_LINK}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-light"
                        >
                          Telegram
                        </a>
                      </div>
                    </div>

                    <div className="memo">
                      <div className="eyebrow" style={{ color: "#a1a1aa" }}>
                        Office memo
                      </div>
                      <p>
                        We are not chasing hustle culture. We are documenting the emotional
                        reality of fluorescent lighting, passive-aggressive emails, and
                        pretending the team-building session was fun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container">
              <div className="stats-grid">
                {stats.map((item) => (
                  <div key={item.title} className="stat-card">
                    <div className="stat-icon">{item.icon}</div>
                    <h3 className="stat-title">{item.title}</h3>
                    <p className="stat-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container">
              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-inner">
                    <div className="feature-copy">
                      <div className="eyebrow">Daily life</div>
                      <h2 className="feature-title">Gary in the building</h2>
                      <p>
                        Use the illustrated BORED assets throughout the page to make it feel
                        alive. Gary should appear like the unofficial mascot of every underpaid,
                        over-caffeinated department.
                      </p>
                      <p className="small-text">
                        This section is a great place for lore, roadmap humour, community copy,
                        or a light-hearted explanation of what $BORED stands for.
                      </p>
                    </div>

                    <img
                      src="/bored3.png"
                      alt="BORED character art"
                      className="feature-image"
                    />
                  </div>
                </div>

                <div className="signs-grid">
                  {signs.map((sign) => (
                    <div key={sign.src} className="sign-card">
                      <img src={sign.src} alt={sign.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="page-section" style={{ paddingBottom: "64px" }}>
            <div className="container">
              <div className="cta-shell">
                <div>
                  <div className="eyebrow" style={{ color: "#a1a1aa" }}>
                    Join the department
                  </div>
                  <h2 className="cta-title">Clock in. Zone out. Hold $BORED.</h2>
                  <p className="cta-text">
                    The contract is live, the Telegram is ready, and Gary is already emotionally unavailable.
                  </p>
                </div>

                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  Telegram Group
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}


