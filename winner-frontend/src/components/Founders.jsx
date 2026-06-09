import { FadeIn } from "./FadeIn";
import { COLOR, FOUNDERS } from "../data";

export function Founders() {
  return (
    <section
      id="Founders"
      data-section="Founders"
      className="section"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 48, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="eyebrow-line" />
              Our Founders
            </div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>
              The Vision Behind Winner Pharmaceuticals
            </h2>
            <p className="lead">
              Winner Pharmaceuticals began with two people who believed every
              community in Liberia deserves reliable access to quality
              medicines.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="founders-card">
            <div className="founders-photo-wrap">
              <img
                src={FOUNDERS.image}
                alt={FOUNDERS.imageAlt}
                className="founders-photo"
                loading="lazy"
              />
            </div>

            <div className="founders-content">
              <div
                style={{
                  color: COLOR.teal,
                  fontWeight: 700,
                  fontSize: 12.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Est. 2005 · Gobachop Market, Monrovia
              </div>

              <h3 className="founders-names">{FOUNDERS.names}</h3>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 16,
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                {FOUNDERS.bio}
              </p>

              <div className="founders-tags">
                {FOUNDERS.highlights.map((item) => (
                  <span key={item} className="founders-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
