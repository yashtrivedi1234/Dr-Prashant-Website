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
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-background ${scrolled ? "shadow-xl shadow-primary/5" : "shadow-sm"}`}>
      <div className="container-main flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="gradient-primary p-2 rounded-lg">
            <Stethoscope className="text-primary-foreground" size={24} />
          </div>
          <span className="font-heading text-xl font-bold gradient-text">Dr. Prashant</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
