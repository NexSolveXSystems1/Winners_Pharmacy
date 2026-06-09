import { useState } from "react";
import { COLOR } from "../data";

export function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false);
  const Icon = svc.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: "100%",
        background: "var(--surface)",
        borderRadius: "var(--r-lg)",
        padding: "34px 28px",
        border: hovered
          ? `1px solid ${COLOR.teal}`
          : "1px solid var(--line)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: hovered ? "var(--shadow-teal)" : "var(--shadow-sm)",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 3,
          width: hovered ? "100%" : "38%",
          background: `linear-gradient(90deg, ${COLOR.teal}, ${COLOR.green}, transparent)`,
          transition: "all 0.45s ease",
        }}
      />

      {/* icon badge */}
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: hovered
            ? `linear-gradient(135deg, ${COLOR.teal}, ${COLOR.green})`
            : "var(--card-icon-bg)",
          border: "1px solid var(--card-icon-border)",
          marginBottom: 20,
          transition: "all 0.35s ease",
        }}
      >
        <Icon size={25} color={hovered ? "#fff" : COLOR.teal} />
      </div>

      <h3
        style={{
          color: "var(--heading)",
          fontWeight: 700,
          fontSize: 18.5,
          marginBottom: 12,
          letterSpacing: "-0.02em",
        }}
      >
        {svc.title}
      </h3>

      <p
        style={{
          color: "var(--muted)",
          fontSize: 15,
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {svc.desc}
      </p>
    </div>
  );
}
