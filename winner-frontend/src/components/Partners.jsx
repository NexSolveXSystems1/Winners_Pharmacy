import { FadeIn } from "./FadeIn";
import { Dna } from "lucide-react";
import { COLOR, PARTNER_TAGS } from "../data";

export function Partners() {
  return (
    <section
      id="Partners"
      data-section="Partners"
      className="section"
      style={{
        background: `linear-gradient(135deg, ${COLOR.navy} 0%, var(--navy-deep) 100%)`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-6%",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,163,165,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <FadeIn>
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <div
              className="eyebrow"
              style={{ marginBottom: 16, color: COLOR.lgreen }}
            >
              <span className="eyebrow-line" />
              Global Partnerships
            </div>
            <h2 className="section-title" style={{ marginBottom: 18, color: "#fff" }}>
              International Supply Chain Partners
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.7)" }}>
              Our international partnerships ensure Winner Pharmaceuticals sources
              only from reputable, WHO-approved manufacturers — delivering quality
              medicine to every corner of Liberia.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "var(--r-xl)",
              padding: "48px",
              display: "flex",
              gap: 48,
              alignItems: "center",
              flexWrap: "wrap",
              backdropFilter: "blur(6px)",
            }}
          >
            <div
              style={{
                width: 124,
                height: 124,
                borderRadius: 20,
                background: `linear-gradient(135deg, ${COLOR.teal}, ${COLOR.green})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 42,
                flexShrink: 0,
                boxShadow: "0 16px 40px rgba(56,163,165,0.4)",
              }}
            >
              <Dna size={52} color="#fff" strokeWidth={1.75} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div
                style={{
                  color: COLOR.lgreen,
                  fontWeight: 700,
                  fontSize: 12.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Primary Supplier · India
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 27,
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Laborate Pharmaceuticals India Ltd
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 16,
                  lineHeight: 1.75,
                  maxWidth: 560,
                }}
              >
                A leading WHO-GMP certified pharmaceutical manufacturer based in
                India, supplying Winner Pharmaceuticals with a comprehensive range
                of branded generics, tablets, capsules, and injectables for the
                Liberian market.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 24,
                  flexWrap: "wrap",
                }}
              >
                {PARTNER_TAGS.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "7px 15px",
                      borderRadius: 100,
                      fontSize: 12.5,
                      fontWeight: 600,
                      background: "rgba(128,237,153,0.15)",
                      color: COLOR.lgreen,
                      border: "1px solid rgba(128,237,153,0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            style={{
              marginTop: 36,
              padding: "30px 40px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "var(--r-md)",
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15 }}>
              Trusted international pharmaceutical partnerships · Certified
              regulatory compliance · Verified supply chain integrity
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
