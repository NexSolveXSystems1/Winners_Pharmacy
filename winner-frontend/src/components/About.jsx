import { FadeIn } from "./FadeIn";
import { COLOR, TIMELINE, FEATURE_STATS } from "../data";

const STORY = [
  "Winner Pharmaceuticals was established in 2005 at the Gobachop Market, Paynesville Red Light, in Monrovia, Liberia, by Mr. Victor Peah and Mrs. Fannie Peah. The business began as a small pharmaceutical outlet serving local communities with essential medicines.",
  "As demand grew, the company opened a second branch on Pipeline Road — marking its transition from a market-based operation into a structured pharmaceutical enterprise. It later upgraded to a wholesale pharmacy and obtained an Importer License from the Liberia Medicines and Health Regulatory Authority (LMHRA).",
  "With that license, Winner Pharmaceuticals began importing high-quality products from Laborate Pharmaceuticals India Ltd, building a long-term, reliable supply-chain partnership. For over 20 years, the company — fully Liberian-owned — has been engaged in the importation, sales, and nationwide distribution of medicines and medical products, growing into one of the leading importers and distributors in the Liberian market.",
  "Today, Winner Pharmaceuticals operates seven pharmacy branches in and around Monrovia, with combined weekly sales averaging approximately US$70,000. The company has also diversified into real estate, with additional buildings currently under construction.",
];

export function About() {
  return (
    <section
      id="About"
      data-section="About"
      className="section"
      style={{ background: "var(--surface)" }}
    >
      <div className="container">
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="eyebrow-line" />
            Our Story
          </div>
          <h2 className="section-title" style={{ marginBottom: 22, maxWidth: 760 }}>
            Built on Trust. Grown Through Service.
          </h2>
        </FadeIn>

        {/* Narrative */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "26px 56px",
            maxWidth: 940,
            marginBottom: 72,
          }}
        >
          {STORY.map((paragraph, index) => (
            <FadeIn key={index} delay={index * 0.06}>
              <p
                className="lead"
                style={{ color: index === 0 ? "var(--text)" : "var(--muted)" }}
              >
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Timeline */}
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="eyebrow-line" />
            Milestones
          </div>
        </FadeIn>
        <div style={{ position: "relative", maxWidth: 760 }}>
          <div
            style={{
              position: "absolute",
              left: 19,
              top: 6,
              bottom: 6,
              width: 2,
              background: `linear-gradient(to bottom, ${COLOR.teal}, ${COLOR.base})`,
            }}
          />
          {TIMELINE.map((item, index) => (
            <FadeIn key={item.year} delay={index * 0.06}>
              <div
                style={{
                  display: "flex",
                  gap: 28,
                  marginBottom: 32,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: COLOR.navy,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    boxShadow: "0 0 0 6px var(--surface)",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: COLOR.lgreen,
                    }}
                  />
                </div>
                <div style={{ paddingTop: 7 }}>
                  <div
                    style={{
                      color: COLOR.teal,
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    style={{ color: "var(--text)", fontSize: 16, lineHeight: 1.6 }}
                  >
                    {item.event}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats panel */}
        <FadeIn delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
              marginTop: 56,
              padding: "52px 44px",
              background: `linear-gradient(135deg, ${COLOR.navy}, var(--navy-deep))`,
              borderRadius: "var(--r-xl)",
              boxShadow: "var(--shadow-lg)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -100,
                right: -60,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(87,204,153,0.22) 0%, transparent 70%)",
              }}
            />
            {FEATURE_STATS.map((stat) => (
              <div
                key={stat.label}
                style={{ textAlign: "center", position: "relative" }}
              >
                <div
                  style={{
                    color: COLOR.lgreen,
                    fontWeight: 800,
                    fontSize: 38,
                    lineHeight: 1,
                    fontFamily: "var(--font-head)",
                  }}
                >
                  {stat.n}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.62)",
                    fontSize: 12.5,
                    marginTop: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
