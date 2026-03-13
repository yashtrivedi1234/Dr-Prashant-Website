import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";

const links = ["Home", "About", "Services", "Gallery", "Testimonials", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-shadow duration-300 bg-background ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
      <div className="container-main flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <Stethoscope className="text-primary" size={32} />
          <span className="font-heading text-xl font-bold text-foreground">Dr. Prashant</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm tracking-wide">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/50 last:border-0"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
