import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { GALLERY, GALLERY_CATEGORIES, COLOR } from "../data";

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items =
    filter === "All"
      ? GALLERY
      : GALLERY.filter((item) => item.category === filter);

  const isOpen = lightboxIndex !== null;
  const current = isOpen ? items[lightboxIndex] : null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((index) => (index + 1) % items.length),
    [items.length],
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((index) => (index - 1 + items.length) % items.length),
    [items.length],
  );

  // Keyboard navigation + body scroll lock while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") next();
      else if (event.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, next, prev]);

  return (
    <section
      id="Gallery"
      data-section="Gallery"
      className="section"
      style={{
        background:
          "linear-gradient(180deg, var(--surface-2) 0%, var(--surface) 100%)",
      }}
    >
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 36, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="eyebrow-line" />
              Our Work
            </div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>
              Inside Winner Pharmaceuticals
            </h2>
            <p className="lead">
              A look at our branches, our people, the products we distribute,
              and moments from events across our 20-year journey.
            </p>
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setFilter(cat.id);
                  setLightboxIndex(null);
                }}
                className={`gallery-filter ${filter === cat.id ? "is-active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry grid */}
        <div className="gallery-grid">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={(index % 3) * 0.06}>
              <figure
                className="gallery-item"
                onClick={() => setLightboxIndex(index)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption className="gallery-overlay">
                  <span
                    style={{
                      alignSelf: "flex-start",
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: COLOR.navy,
                      background: COLOR.lgreen,
                      padding: "3px 10px",
                      borderRadius: 100,
                      marginBottom: 8,
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && current && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
        >
          <button
            className="lb-btn lb-close"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            aria-label="Close"
          >
            <X size={24} strokeWidth={2} />
          </button>

          {items.length > 1 && (
            <>
              <button
                className="lb-btn lb-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} strokeWidth={2} />
              </button>
              <button
                className="lb-btn lb-next"
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={28} strokeWidth={2} />
              </button>
            </>
          )}

          <div
            onClick={(event) => event.stopPropagation()}
            style={{ textAlign: "center" }}
          >
            <img
              key={current.id}
              className="lightbox-img"
              src={current.src}
              alt={current.alt}
            />
            <div
              style={{
                marginTop: 16,
                color: "rgba(255,255,255,0.92)",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {current.caption}
              <span
                style={{
                  color: "rgba(255,255,255,0.5)",
                  marginLeft: 12,
                  fontSize: 13,
                }}
              >
                {lightboxIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
