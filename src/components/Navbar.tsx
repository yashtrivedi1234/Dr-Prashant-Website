import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-background ${scrolled ? "shadow-xl shadow-primary/5" : "shadow-sm"}`}>
      <div className="container-main flex items-center justify-between py-4 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-primary p-2 rounded-lg">
            <Stethoscope className="text-primary-foreground" size={24} />
          </div>
          <span className="font-heading text-xl font-bold gradient-text">Dr. Prashant</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.name}>
              {l.href.startsWith("/#") ? (
                <a 
                  href={l.href} 
                  className={`text-foreground/70 hover:text-primary font-medium transition-colors text-lg tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${location.hash === l.href.substring(1) ? "text-primary after:w-full" : ""}`}
                >
                  {l.name}
                </a>
              ) : (
                <Link 
                  to={l.href} 
                  className={`text-foreground/70 hover:text-primary font-medium transition-colors text-lg tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${location.pathname === l.href ? "text-primary after:w-full" : ""}`}
                >
                  {l.name}
                </Link>
              )}
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
            l.href.startsWith("/#") ? (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/50 last:border-0"
              >
                {l.name}
              </a>
            ) : (
              <Link
                key={l.name}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/50 last:border-0"
              >
                {l.name}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
