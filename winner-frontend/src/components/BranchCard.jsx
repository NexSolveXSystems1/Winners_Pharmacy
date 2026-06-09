import { useState } from "react";
import { MapPin, Phone, Hospital } from "lucide-react";
import { COLOR } from "../data";

export function BranchCard({ branch }) {
  const [isHovered, setIsHovered] = useState(false);
  const isHQ = branch.status === "HQ & Flagship";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: "100%",
        borderRadius: "var(--r-md)",
        padding: 26,
        border: `1.5px solid ${
          isHQ ? "transparent" : isHovered ? "rgba(56,163,165,0.4)" : "var(--line)"
        }`,
        background: isHQ
          ? `linear-gradient(135deg, ${COLOR.navy}, var(--navy-deep))`
          : "var(--surface)",
        transform: isHovered ? "translateY(-5px)" : "none",
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: isHovered
          ? isHQ
            ? "var(--shadow-lg)"
            : "var(--shadow-md)"
          : isHQ
            ? "var(--shadow-md)"
            : "var(--shadow-sm)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isHQ && (
        <>
          <div
            style={{
              position: "absolute",
              top: -70,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(87,204,153,0.25) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: COLOR.lgreen,
              color: COLOR.navy,
              fontSize: 10,
              fontWeight: 800,
              padding: "4px 11px",
              borderRadius: 100,
              letterSpacing: "0.06em",
            }}
          >
            HQ
          </div>
        </>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            flexShrink: 0,
            background: isHQ ? "rgba(255,255,255,0.14)" : "var(--branch-icon-bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Hospital size={22} color={isHQ ? "#fff" : COLOR.teal} />
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 16.5,
              color: isHQ ? "#fff" : "var(--heading)",
              fontFamily: "var(--font-head)",
              letterSpacing: "-0.01em",
            }}
          >
            {branch.name}
          </div>
          <div
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 9px",
              borderRadius: 100,
              marginTop: 5,
              letterSpacing: "0.04em",
              background: isHQ ? "rgba(128,237,153,0.2)" : "var(--branch-status-bg)",
              color: isHQ ? COLOR.lgreen : COLOR.teal,
            }}
          >
            {branch.status}
          </div>
        </div>
      </div>

      <div
        style={{
          color: isHQ ? "rgba(255,255,255,0.72)" : "var(--muted)",
          fontSize: 14,
          marginBottom: 9,
          display: "flex",
          alignItems: "flex-start",
          gap: 9,
          position: "relative",
        }}
      >
        <MapPin
          size={16}
          color={isHQ ? COLOR.lgreen : COLOR.teal}
          style={{ marginTop: 2, flexShrink: 0 }}
        />
        <span>{branch.location}</span>
      </div>
      <div
        style={{
          color: isHQ ? "rgba(255,255,255,0.72)" : "var(--muted)",
          fontSize: 14,
          display: "flex",
          alignItems: "center",
          gap: 9,
          position: "relative",
        }}
      >
        <Phone
          size={16}
          color={isHQ ? COLOR.lgreen : COLOR.teal}
          style={{ flexShrink: 0 }}
        />
        <span>{branch.phone}</span>
      </div>
    </div>
  );
}
