import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Btn } from "./Btn";
import { COLOR, TRUST_STATS } from "../data";

function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const backgroundImageUrl = "/winner.jpeg";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const reveal = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      id="Home"
      data-section="Home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Layered gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(115deg, rgba(13,35,55,0.92) 0%, rgba(13,35,55,0.78) 42%, rgba(34,87,122,0.62) 100%)",
        }}
      />
      {/* Glow accents */}
      <div
        style={{
          position: "absolute",
          top: "-12%",
          right: "-6%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,163,165,0.28) 0%, transparent 70%)",
          animation: "float 9s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "2%",
          left: "-8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(87,204,153,0.22) 0%, transparent 70%)",
          animation: "float 11s ease-in-out infinite",
        }}
      />
      {/* Dotted texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 2, padding: "130px 24px 90px" }}
      >
        <div
          style={{
            ...reveal(0.1),
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "rgba(56,163,165,0.18)",
            border: "1px solid rgba(56,163,165,0.4)",
            borderRadius: 100,
            padding: "7px 16px",
            marginBottom: 30,
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: COLOR.green,
              boxShadow: `0 0 0 4px rgba(87,204,153,0.25)`,
            }}
          />
          <span
            style={{
              color: COLOR.lgreen,
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: "0.12em",
            }}
          >
            LMHRA LICENSED · ESTABLISHED 2005
          </span>
        </div>

        <h1
          style={{
            ...reveal(0.2),
            color: "#fff",
            fontSize: "clamp(2.2rem, 5.4vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            maxWidth: 860,
            marginBottom: 24,
            letterSpacing: "-0.025em",
          }}
        >
          Trusted Pharmaceutical Importer &amp; Distributor Serving{" "}
          <span
            style={{
              background: `linear-gradient(120deg, ${COLOR.lgreen}, ${COLOR.green})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Liberia
          </span>{" "}
          Since 2005
        </h1>

        <p
          style={{
            ...reveal(0.32),
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            maxWidth: 600,
            lineHeight: 1.75,
            marginBottom: 44,
          }}
        >
          Supplying hospitals, pharmacies, and healthcare institutions across
          Liberia with certified pharmaceutical products — safely, reliably, and
          at scale.
        </p>

        <div
          style={{
            ...reveal(0.44),
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Btn onClick={() => scrollTo("Contact")}>
            Contact Us <ArrowRight size={18} className="btn-arrow" />
          </Btn>
          <Btn variant="ghost" onClick={() => scrollTo("Branches")}>
            View Our Branches
          </Btn>
        </div>

        {/* Trust stat strip */}
        <div
          style={{
            ...reveal(0.58),
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 1,
            marginTop: 72,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(6px)",
            maxWidth: 860,
          }}
        >
          {TRUST_STATS.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "26px 22px",
                textAlign: "center",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 25,
                  marginBottom: 6,
                  fontFamily: "var(--font-head)",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 11.5,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.4)",
          fontSize: 13,
          textAlign: "center",
          animation: "bounce 2s infinite",
        }}
      >
        <ChevronDown size={22} strokeWidth={2} />
      </div>
    </section>
  );
}
