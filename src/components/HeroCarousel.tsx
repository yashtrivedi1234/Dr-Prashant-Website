import hero from "@/assets/hero.png";
import heroMobile from "@/assets/prashant dr.jpeg";
// import heroMobile from "@/assets/prshant d r1.jpeg";
const HeroCarousel = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-foreground"
      style={{
        height: "min(85svh, 960px)",
        minHeight: 460,
      }}
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] z-10 gradient-primary" />

      {/* Hero Image — mobile alag, desktop alag */}
      <picture>
        <source media="(max-width: 639px)" srcSet={heroMobile} />
        <img
          src={hero}
          alt="Dr. Prashant – ENT, Vertigo & Allergy Specialist"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-[75%_center]"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 sm:bg-black/5" />

      {/* Bottom gradient */}
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