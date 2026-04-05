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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #d4d4d8, #e4e4e7, #f1f5f9)",
        color: "#18181b",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(113,113,122,0.25)",
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              alt="$BORED logo"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "14px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              }}
            />
            <div>
              <div style={{ fontSize: "18px", fontWeight: 700 }}>$BORED</div>
              <div style={{ fontSize: "12px", color: "#52525b" }}>
                Corporate survival token
              </div>
            </div>
          </div>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              background: "#27272a",
              color: "white",
              padding: "10px 16px",
              borderRadius: "16px",
              fontWeight: 600,
            }}
          >
            Telegram
          </a>
        </div>
      </header>

      <main>
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 16px 48px" }}>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "32px",
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(113,113,122,0.20)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.10)",
            }}
          >
            <img
              src="/boredbanner.png"
              alt="BORED office banner"
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.15fr 0.85fr",
                gap: "24px",
                padding: "32px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(113,113,122,0.20)",
                    color: "#52525b",
                    fontSize: "14px",
                    marginBottom: "22px",
                  }}
                >
                  Modern office vibes. Terminal burnout. Gary gets it.
                </div>

                <h1
                  style={{
                    fontSize: "56px",
                    lineHeight: 1,
                    margin: "0 0 18px 0",
                    fontWeight: 900,
                  }}
                >
                  The token for everyone
                  <span style={{ display: "block", color: "#71717a" }}>
                    bored of the daily grind.
                  </span>
                </h1>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    color: "#3f3f46",
                    maxWidth: "700px",
                    marginBottom: "22px",
                  }}
                >
                  $BORED captures the office-building mood: polished on the outside,
                  spiritually exhausted on the inside. Gary the sloth is here for every
                  drained commute, every fake smile, and every meeting that could have
                  been an email.
                </p>

                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    background: "white",
                    color: "#18181b",
                    padding: "14px 22px",
                    borderRadius: "18px",
                    border: "1px solid rgba(113,113,122,0.22)",
                    fontWeight: 700,
                  }}
                >
                  Join Telegram
                </a>
              </div>

              <div
                style={{
                  borderRadius: "32px",
                  background: "linear-gradient(to bottom right, #f4f4f5, #e2e8f0)",
                  border: "1px solid rgba(113,113,122,0.20)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  padding: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <img
                    src="/bored1.png"
                    alt="Gary the sloth"
                    style={{
                      width: "82px",
                      height: "82px",
                      borderRadius: "24px",
                      objectFit: "cover",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "#71717a",
                      }}
                    >
                      Featured employee
                    </div>
                    <div style={{ fontSize: "28px", fontWeight: 800, marginTop: "4px" }}>
                      Gary
                    </div>
                    <p style={{ margin: "6px 0 0 0", fontSize: "14px", color: "#52525b" }}>
                      Head of burnout, morale, and doing the bare minimum beautifully.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "24px",
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(113,113,122,0.18)",
                    padding: "18px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "#71717a",
                      marginBottom: "10px",
                    }}
                  >
                    Contract address
                  </div>

                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#27272a",
                      wordBreak: "break-all",
                    }}
                  >
                    {CONTRACT_ADDRESS}
                  </div>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
                    <button
                      onClick={copyCA}
                      style={{
                        background: "#27272a",
                        color: "white",
                        border: "none",
                        padding: "12px 18px",
                        borderRadius: "16px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Copy CA
                    </button>

                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        background: "white",
                        color: "#18181b",
                        border: "1px solid rgba(113,113,122,0.22)",
                        padding: "12px 18px",
                        borderRadius: "16px",
                        fontWeight: 700,
                      }}
                    >
                      Telegram
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "24px",
                    background: "#18181b",
                    color: "#f4f4f5",
                    padding: "18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "#a1a1aa",
                      marginBottom: "10px",
                    }}
                  >
                    Office memo
                  </div>
                  <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7, color: "#e4e4e7" }}>
                    We are not chasing hustle culture. We are documenting the emotional
                    reality of fluorescent lighting, passive-aggressive emails, and
                    pretending the team-building session was fun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {stats.map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "28px",
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(113,113,122,0.18)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "16px",
                    background: "#27272a",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    marginBottom: "16px",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "22px" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#52525b", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 16px 40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "24px",
            }}
          >
            <div
              style={{
                borderRadius: "32px",
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(113,113,122,0.18)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100%" }}>
                <div style={{ padding: "32px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.25em",
                      color: "#71717a",
                      marginBottom: "10px",
                    }}
                  >
                    Daily life
                  </div>
                  <h2 style={{ fontSize: "42px", margin: "0 0 16px 0" }}>Gary in the building</h2>
                  <p style={{ color: "#3f3f46", lineHeight: 1.8, marginBottom: "14px" }}>
                    Use the illustrated BORED assets throughout the page to make it feel
                    alive. Gary should appear like the unofficial mascot of every underpaid,
                    over-caffeinated department.
                  </p>
                  <p style={{ color: "#52525b", lineHeight: 1.7, fontSize: "14px", margin: 0 }}>
                    This section is a great place for lore, roadmap humour, community copy,
                    or a light-hearted explanation of what $BORED stands for.
                  </p>
                </div>

                <img
                  src="/bored3.png"
                  alt="BORED character art"
                  style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "320px" }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {signs.map((sign) => (
                <div
                  key={sign.src}
                  style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(113,113,122,0.18)",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.07)",
                  }}
                >
                  <img
                    src={sign.src}
                    alt={sign.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "170px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px 64px" }}>
          <div
            style={{
              borderRadius: "32px",
              background: "#18181b",
              color: "white",
              boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
              padding: "36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.25em",
                  color: "#a1a1aa",
                  marginBottom: "10px",
                }}
              >
                Join the department
              </div>
              <h2 style={{ fontSize: "48px", margin: "0 0 12px 0", lineHeight: 1.05 }}>
                Clock in. Zone out. Hold $BORED.
              </h2>
              <p style={{ margin: 0, color: "#d4d4d8", lineHeight: 1.7, maxWidth: "700px" }}>
                The contract is live, the Telegram is ready, and Gary is already emotionally unavailable.
              </p>
            </div>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.22)",
                padding: "14px 20px",
                borderRadius: "18px",
                fontWeight: 700,
              }}
            >
              Telegram Group
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}


