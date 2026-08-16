import { FadeIn } from "./FadeIn";
import { TEAM } from "../data";

export function Team() {
  return (
    <section
      id="Team"
      data-section="Team"
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 48, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="eyebrow-line" />
              Our People
            </div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>
              Meet the Team Behind Winner Pharmaceuticals
            </h2>
            <p className="lead">
              A dedicated team of professionals committed to delivering quality
              medicines and healthcare solutions to every community in Liberia.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {TEAM.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.07}>
              <div
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--r-lg)",
                  padding: "32px 28px",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--line)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  height: "100%",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 160,
                    height: 160,
                    margin: "0 auto",
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: `linear-gradient(160deg, ${member.color}22 0%, ${member.color}44 100%)`,
                    border: `1px dashed ${member.color}66`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    flexShrink: 0,
                  }}
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle cx="26" cy="20" r="11" fill={member.color} opacity="0.5" />
                        <ellipse cx="26" cy="42" rx="18" ry="11" fill={member.color} opacity="0.3" />
                      </svg>
                      <span
                        style={{
                          fontSize: 12,
                          color: member.color,
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          opacity: 0.8,
                        }}
                      >
                        Photo coming soon
                      </span>
                    </>
                  )}
                </div>

                <div style={{ textAlign: "center" }}>
                  <h3
                    style={{
                      color: "var(--heading)",
                      fontWeight: 700,
                      fontSize: 19,
                      marginBottom: 4,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      color: "var(--teal)",
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.role}
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
