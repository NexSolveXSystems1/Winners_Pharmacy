import { FadeIn } from "./FadeIn";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "../data";

export function Services() {
  return (
    <section
      id="Services"
      data-section="Services"
      className="section"
      style={{
        background:
          "linear-gradient(180deg, var(--surface-2) 0%, var(--surface) 60%, var(--surface-2) 100%)",
        overflow: "hidden",
      }}
    >
      {/* background glow */}
      <div
        style={{
          position: "absolute",
          top: "-140px",
          right: "-140px",
          width: 340,
          height: 340,
          background: "var(--glow-accent)",
          filter: "blur(90px)",
          borderRadius: "50%",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <FadeIn>
          <div style={{ marginBottom: 56, maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="eyebrow-dot" />
              What We Do
            </div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>
              End-to-End Pharmaceutical Care
            </h2>
            <p className="lead">
              Winner Pharmaceuticals operates across the full healthcare supply
              chain — from regulated importation and wholesale distribution to
              community retail pharmacy services — ensuring safe, reliable, and
              compliant access to essential medicines across Liberia.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 26,
            alignItems: "stretch",
          }}
        >
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <ServiceCard svc={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
