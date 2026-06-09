import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Btn } from "./Btn";
import { CONTACT_INFO, COLOR, buildWhatsAppContactUrl } from "../data";

function validateForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Full name is required";
  if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
    errors.email = "Valid email required";
  if (!form.message.trim() || form.message.length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validation = validateForm(form);
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setErrors({});
    const url = buildWhatsAppContactUrl(form);
    const opened = window.open(url, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = url;
    }

    setForm({ name: "", email: "", message: "" });
    setStatus("success");
  };

  const inputClass = (field) =>
    `form-input${errors[field] ? " is-error" : ""}`;

  return (
    <section
      id="Contact"
      data-section="Contact"
      className="section"
      style={{ background: "var(--surface-2)" }}
    >
      <div
        className="container contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "start",
        }}
      >
        <FadeIn>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="eyebrow-line" />
              Contact Us
            </div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Partner with Winner Pharmaceuticals
            </h2>
            <p className="lead" style={{ marginBottom: 40 }}>
              Whether you're a hospital, clinic, community pharmacy, or healthcare
              NGO — we're ready to supply your pharmaceutical needs across Liberia.
            </p>

            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 16,
                    marginBottom: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "var(--icon-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={COLOR.teal} />
                  </div>
                  <div>
                    <div
                      style={{
                        color: "var(--hint)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 3,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: "var(--heading)",
                        fontSize: 15.5,
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="form-card">
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "44px 0" }}>
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    margin: "0 auto 22px",
                    background: `linear-gradient(135deg, ${COLOR.teal}, ${COLOR.green})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    color: "#fff",
                    boxShadow: "0 14px 32px rgba(56,163,165,0.4)",
                  }}
                >
                  <Check size={36} strokeWidth={2.5} />
                </div>
                <h3
                  style={{
                    color: "var(--heading)",
                    fontWeight: 700,
                    fontSize: 23,
                    marginBottom: 12,
                  }}
                >
                  WhatsApp is ready
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6 }}>
                  Your message was prepared in WhatsApp. Tap Send there to
                  deliver it to our team — we&apos;ll respond as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-outline"
                  style={{ marginTop: 24 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    color: "var(--heading)",
                    fontWeight: 700,
                    fontSize: 21,
                    marginBottom: 26,
                  }}
                >
                  Send Us a Message
                </h3>

                <div style={{ marginBottom: 20 }}>
                  <label className="form-label">FULL NAME *</label>
                  <input
                    type="text"
                    className={inputClass("name")}
                    placeholder="e.g. Dr. James Kollie"
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                  />
                  {errors.name && (
                    <div className="form-error">{errors.name}</div>
                  )}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label className="form-label">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    className={inputClass("email")}
                    placeholder="you@organization.org"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                  />
                  {errors.email && (
                    <div className="form-error">{errors.email}</div>
                  )}
                </div>

                <div style={{ marginBottom: 26 }}>
                  <label className="form-label">MESSAGE *</label>
                  <textarea
                    rows={5}
                    className={inputClass("message")}
                    placeholder="Tell us about your pharmaceutical needs..."
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    style={{ resize: "vertical" }}
                  />
                  {errors.message && (
                    <div className="form-error">{errors.message}</div>
                  )}
                </div>

                <Btn onClick={handleSubmit} style={{ width: "100%" }}>
                  Continue on WhatsApp{" "}
                  <ArrowRight size={18} className="btn-arrow" />
                </Btn>
                <p
                  style={{
                    color: "var(--hint)",
                    fontSize: 12,
                    textAlign: "center",
                    marginTop: 16,
                    lineHeight: 1.5,
                  }}
                >
                  You&apos;ll finish sending in WhatsApp. Your details are only
                  used to help us respond to your inquiry.
                </p>
              </>
            )}
          </div>
        </FadeIn>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
