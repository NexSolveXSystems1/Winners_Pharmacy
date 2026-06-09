import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COLOR } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { Btn } from "./Btn";
import { ThemeToggle } from "./ThemeToggle";

function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const logoUrl = "/logo.jpeg";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="nav-shell"
      style={{
        background: scrolled ? "var(--nav-scrolled-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--nav-border)"
          : "1px solid transparent",
        boxShadow: scrolled ? "var(--nav-shadow)" : "none",
      }}
    >
      <div className="container">
        <div className="nav-inner">
          {/* Brand — logo left untouched */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
            }}
            onClick={() => scrollTo("Home")}
          >
            <div
              style={{
                position: "relative",
                width: 42,
                height: 42,
                borderRadius: 11,
                background: `linear-gradient(135deg, ${COLOR.teal}, ${COLOR.green})`,
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(56,163,165,0.4)",
                flexShrink: 0,
              }}
            >
              <img
                src={logoUrl}
                alt="Winner Pharmaceuticals logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: logoVisible ? "block" : "none",
                }}
                onError={() => setLogoVisible(false)}
              />
              {!logoVisible && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 19,
                    color: "#fff",
                    fontFamily: "var(--font-head)",
                  }}
                >
                  W
                </div>
              )}
            </div>
            <div>
              <div
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16.5,
                  lineHeight: 1.1,
                  fontFamily: "var(--font-head)",
                  letterSpacing: "-0.01em",
                }}
              >
                Winner
              </div>
              <div
                style={{
                  color: COLOR.lgreen,
                  fontSize: 9.5,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Pharmaceuticals
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`nav-link ${active === link ? "is-active" : ""}`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ThemeToggle />
            <Btn
              className="nav-contact-button"
              variant="ghost"
              onClick={() => scrollTo("Contact")}
            >
              Get In Touch
            </Btn>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            background: "var(--nav-drawer-bg)",
            backdropFilter: "blur(14px)",
            padding: "12px 0 22px",
            borderTop: "1px solid var(--nav-border)",
          }}
        >
          <div className="container">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  scrollTo(link);
                  setMenuOpen(false);
                }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "13px 8px",
                  background: "transparent",
                  color: active === link ? COLOR.lgreen : "rgba(255,255,255,0.85)",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: active === link ? 700 : 500,
                }}
              >
                {link}
              </button>
            ))}
            <div style={{ marginTop: 12 }}>
              <Btn
                variant="ghost"
                onClick={() => {
                  scrollTo("Contact");
                  setMenuOpen(false);
                }}
                style={{ width: "100%" }}
              >
                Get In Touch
              </Btn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
