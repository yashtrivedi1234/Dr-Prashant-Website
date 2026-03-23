import hero from "@/assets/hero.png";

/* ─── Main Component ─────────────────────────────────────────── */
const HeroCarousel = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-foreground"
      style={{
        height:
          typeof window !== "undefined" && window.innerWidth < 640
            ? "70svh"
            : "min(85svh, 960px)",
        minHeight:
          typeof window !== "undefined" && window.innerWidth < 640
            ? 420
            : 460,
      }}
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] z-10 gradient-primary" />

      {/* Hero Image — object-cover fills full area, center-focused */}
      <img
        src={hero}
        alt="Dr. Prashant – ENT, Vertigo & Allergy Specialist"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
      />

      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10 sm:bg-black/5" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10"
        style={{
          background: "linear-gradient(to top, rgba(4,13,20,0.80), transparent)",
        }}
      />
    </section>
  );
};

export default HeroCarousel;