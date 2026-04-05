function App() {
  const cardStyle = {
    background: "linear-gradient(180deg, #d9d9d9 0%, #c9c9c9 100%)",
    border: "1px solid #9a9a9a",
    borderRadius: "14px",
    padding: "20px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
  };

  const imageCardStyle = {
    ...cardStyle,
    padding: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "180px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#4f4f4f",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid #6d6d6d",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  };

  const sectionTitleStyle = {
    fontSize: "1.4rem",
    marginBottom: "12px",
    color: "#2f2f2f",
    letterSpacing: "0.5px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        background:
          "linear-gradient(180deg, #efefef 0%, #dbdbdb 30%, #c8c8c8 100%)",
        color: "#2f2f2f",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          width: "100%",
          background: "#bfbfbf",
          borderBottom: "2px solid #8f8f8f",
          boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        }}
      >
        <img
          src="/boredbanner.png"
          alt="BORED banner"
          style={{
            width: "100%",
            maxHeight: "180px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Main Wrapper */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
        }}
      >
        {/* Hero */}
        <section
          style={{
            ...cardStyle,
            marginBottom: "24px",
            background:
              "linear-gradient(180deg, #d8d8d8 0%, #c2c2c2 100%)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "18px",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/logo.png"
                alt="$BORED logo"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  borderRadius: "50%",
                  background: "#ececec",
                  border: "1px solid #9b9b9b",
                  padding: "8px",
                }}
              />
            </div>

            <div>
              <h1
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "2.2rem",
                  color: "#222222",
                }}
              >
                Department of Unfinished Gains
              </h1>
              <p
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "1.05rem",
                  color: "#4a4a4a",
                }}
              >
                Internal Portal — Authorized Personnel Only
              </p>
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.6,
                  color: "#3b3b3b",
                  maxWidth: "850px",
                }}
              >
                The meme bull run was so successful that the classics retired,
                bought a grey office building in the suburbs, and now spend
                their days trapped in meetings, compliance reviews, budget
                requests, and performance audits. Welcome to $BORED — where the
                charts are flat, morale is lower, and Gary from Accounting is
                still trying to make sense of it all.
              </p>
            </div>
          </div>
        </section>

        {/* CA + Links */}
        <section
          style={{
            ...cardStyle,
            marginBottom: "24px",
            background:
              "linear-gradient(180deg, #d5d5d5 0%, #bebebe 100%)",
          }}
        >
          <h2 style={sectionTitleStyle}>Contract Address</h2>

          <div
            style={{
              background: "#ededed",
              border: "1px solid #9d9d9d",
              borderRadius: "10px",
              padding: "14px",
              marginBottom: "16px",
              fontFamily: "monospace",
              fontSize: "0.98rem",
              color: "#232323",
              wordBreak: "break-all",
            }}
          >
            CA_GOES_HERE_LATER
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="https://x.com/YOUR_X_ACCOUNT"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              X Account
            </a>

            <a
              href="https://t.me/YOUR_TELEGRAM_GROUP"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              Telegram Group
            </a>

            <a
              href="#"
              style={{
                ...buttonStyle,
                background: "#787878",
              }}
            >
              Chart Link Later
            </a>

            <a
              href="#"
              style={{
                ...buttonStyle,
                background: "#787878",
              }}
            >
              Buy Link Later
            </a>
          </div>
        </section>

        {/* Main content grid */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          {/* Left column */}
          <div style={{ display: "grid", gap: "24px" }}>
            {/* Dashboard / Intro box */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Department Dashboard</h2>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  lineHeight: 1.9,
                  color: "#353535",
                }}
              >
                <li>Employee Morale: Declining</li>
                <li>Quarterly Productivity: Under Review</li>
                <li>Meeting Load: Excessive</li>
                <li>Hope of Early Retirement: Escalated to Management</li>
                <li>General Sentiment: Bored Shitless</li>
              </ul>
            </div>

            {/* Gary block */}
            <div
              style={{
                ...cardStyle,
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "18px",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={sectionTitleStyle}>Employee Spotlight</h2>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "8px",
                    color: "#262626",
                  }}
                >
                  Gary — Accounting
                </h3>
                <p style={{ lineHeight: 1.7, color: "#3d3d3d" }}>
                  Gary has seen every cycle, every promise, every “this time it
                  is different” speech, and every budget meeting about why the
                  coffee machine still has not been replaced.
                </p>
                <p style={{ lineHeight: 1.7, color: "#3d3d3d" }}>
                  He remains exhausted, technically employed, and spiritually
                  retired.
                </p>
                <p
                  style={{
                    marginBottom: 0,
                    fontStyle: "italic",
                    color: "#505050",
                  }}
                >
                  “Still holding. Still tired.”
                </p>
              </div>

              <div style={imageCardStyle}>
                <img
                  src="/bored1.png"
                  alt="Gary the sloth"
                  style={{
                    width: "100%",
                    maxHeight: "320px",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>

            {/* Internal memos */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Internal Memos</h2>

              <div
                style={{
                  background: "#ededed",
                  border: "1px solid #a0a0a0",
                  borderRadius: "10px",
                  padding: "14px",
                  marginBottom: "12px",
                }}
              >
                <strong>Memo #001 — On Motivation</strong>
                <p style={{ marginBottom: 0, lineHeight: 1.6 }}>
                  Recent performance suggests employees are no longer motivated
                  by financial gain. HR has suggested pizza Fridays.
                </p>
              </div>

              <div
                style={{
                  background: "#ededed",
                  border: "1px solid #a0a0a0",
                  borderRadius: "10px",
                  padding: "14px",
                  marginBottom: "12px",
                }}
              >
                <strong>Memo #002 — On Selling</strong>
                <p style={{ marginBottom: 0, lineHeight: 1.6 }}>
                  Employees are reminded that selling the top was optional.
                  Participation was… limited.
                </p>
              </div>

              <div
                style={{
                  background: "#ededed",
                  border: "1px solid #a0a0a0",
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <strong>Memo #003 — On Morale</strong>
                <p style={{ marginBottom: 0, lineHeight: 1.6 }}>
                  Morale remains low despite stable market conditions. No
                  further updates.
                </p>
              </div>
            </div>

            {/* Bottom wide cartoon */}
            <div style={imageCardStyle}>
              <img
                src="/bored3.png"
                alt="BORED office cartoon scene"
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "grid", gap: "24px" }}>
            <div style={imageCardStyle}>
              <img
                src="/sign1.png"
                alt="Office sign 1"
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={imageCardStyle}>
              <img
                src="/sign2.png"
                alt="Office sign 2"
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={imageCardStyle}>
              <img
                src="/sign3.png"
                alt="Office sign 3"
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={imageCardStyle}>
              <img
                src="/sign4.png"
                alt="Office sign 4"
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={imageCardStyle}>
              <img
                src="/sign5.png"
                alt="Office sign 5"
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            ...cardStyle,
            textAlign: "center",
            color: "#4b4b4b",
            fontSize: "0.95rem",
          }}
        >
          <p style={{ margin: 0 }}>
            $BORED — The meme of bureaucracy.
          </p>
          <p style={{ margin: "8px 0 0 0" }}>
            Built for the exhausted. Approved by nobody.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;


