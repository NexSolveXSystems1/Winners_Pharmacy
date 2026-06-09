import { FadeIn } from "./FadeIn";
import { BranchCard } from "./BranchCard";
import { BRANCHES } from "../data";

export function Branches() {
  return (
    <section
      id="Branches"
      data-section="Branches"
      className="section"
      style={{ background: "var(--surface)" }}
    >
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="eyebrow-line" />
              Our Reach
            </div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>
              Seven Branches Serving Liberia
            </h2>
            <p className="lead">
              From Monrovia to the surrounding counties, our pharmacy network
              ensures dependable access to medicines across Liberia's urban and
              rural communities.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 20,
          }}
        >
          {BRANCHES.map((branch, index) => (
            <FadeIn key={branch.id} delay={index * 0.06}>
              <BranchCard branch={branch} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
