import { useState } from "react";
import { Check } from "lucide-react";
import { COLOR, NAV_LINKS, SOCIAL_LINKS } from "../data";

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const [logoVisible, setLogoVisible] = useState(true);
  const logoUrl = "/logo.jpeg";

  return (
    <footer
      style={{
        background: "var(--navy-deep)",
        padding: "64px 0 32px",
        borderTop: `3px solid ${COLOR.teal}`,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: `linear-gradient(135deg, ${COLOR.teal}, ${COLOR.green})`,
                  overflow: "hidden",
                  flexShrink: 0,
                  boxShadow: "0 6px 16px rgba(56,163,165,0.4)",
                }}
              >
                {logoVisible && (
                  <img
                    src={logoUrl}
                    alt="Winner Pharmaceuticals logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={() => setLogoVisible(false)}
                  />
                )}
              </div>
              <div>
                <div
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
                    fontFamily: "var(--font-head)",
                  }}
                >
                  Winner Pharmaceuticals
                </div>
                <div
                  style={{
                    color: COLOR.teal,
                    fontSize: 10,
                    letterSpacing: "0.14em",
                  }}
                >
                  LIBERIA · EST. 2005
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              LMHRA-licensed pharmaceutical importer and distributor serving
              Liberia's healthcare sector since 2005.
            </p>

            <div
              style={{
                color: COLOR.teal,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Follow Us
            </div>
            <div className="footer-social">
              <a
                href={SOCIAL_LINKS.facebook || "#"}
                target={SOCIAL_LINKS.facebook ? "_blank" : undefined}
                rel={SOCIAL_LINKS.facebook ? "noopener noreferrer" : undefined}
                className="footer-social-link"
                aria-label="Winner Pharmaceuticals on Facebook"
                style={{ opacity: SOCIAL_LINKS.facebook ? 1 : 0.45 }}
                onClick={(event) => {
                  if (!SOCIAL_LINKS.facebook) event.preventDefault();
                }}
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Chat with Winner Pharmaceuticals on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                color: COLOR.teal,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Navigation
            </div>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  display: "block",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  textAlign: "left",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 14,
                  marginBottom: 11,
                  cursor: "pointer",
                }}
              >
                {link}
              </button>
            ))}
          </div>

          <div>
            <div
              style={{
                color: COLOR.teal,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Services
            </div>
            {[
              "Pharmaceutical Importation",
              "Wholesale Distribution",
              "Retail Pharmacy",
              "Medical Supply Chain",
            ].map((item) => (
              <div
                key={item}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 14,
                  marginBottom: 11,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div>
            <div
              style={{
                color: COLOR.teal,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Compliance
            </div>
            {[
              "LMHRA Licensed Importer",
              "Pharmaceutical Distributor",
              "Liberia Business Registry",
              "Healthcare Regulatory Compliant",
            ].map((item) => (
              <div
                key={item}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13,
                  marginBottom: 11,
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Check size={14} color={COLOR.green} strokeWidth={3} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © {new Date().getFullYear()} Winner Pharmaceuticals. All rights
            reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            built and developed by NexSolveX Systems
          </div>
        </div>
      </div>
    </footer>
  );
}
