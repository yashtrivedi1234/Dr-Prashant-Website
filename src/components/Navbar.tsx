import { useState, useEffect, useRef } from "react";
import { Menu, X, Stethoscope, ChevronDown, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  {
    name: "About",
    submenu: [
      { name: "About Doctor", href: "/about", desc: "Meet Dr. Prashant" },
      {
        name: "About Clinic",
        href: "/clinic-about",
        desc: "Our facility & team",
      },
    ],
  },
  {
    name: "Allergy Clinic",
    submenu: [
      {
        name: "Allergy Testing",
        href: "/allergy",
        desc: "Comprehensive allergen testing",
      },
      {
        name: "Oral Immunotherapy",
        href: "/oral-immunotherapy",
        desc: "Food allergy treatment",
      },
    ],
  },
  { name: "Vertigo Clinic", href: "/vertigo" },
  { name: "Snoring Clinic", href: "/snoring" },
  { name: "Treatments", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const clickedInsideAny = Object.values(dropdownRefs.current).some(
        (el) => el && el.contains(e.target as Node),
      );
      if (!clickedInsideAny) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const isAboutActive = ["/about", "/clinic-about"].includes(location.pathname);
  const isAllergyActive = ["/allergy", "/oral-immunotherapy"].includes(
    location.pathname,
  );

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/8 border-b border-border/60"
            : "bg-background border-b border-border/30"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Dr. Prashant Home"
          >
            <div className="gradient-primary p-2 rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
              <Stethoscope className="text-primary-foreground" size={22} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-lg font-bold gradient-text tracking-tight">
                Dr. Prashant
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase hidden sm:block">
                Specialist Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="menubar">
            {links.map((l) => {
              if ("submenu" in l) {
                const isOpen = openDropdown === l.name;
                const isHighlighted =
                  l.name === "About"
                    ? isAboutActive
                    : l.name === "Allergy Clinic"
                      ? isAllergyActive
                      : false;

                return (
                  <li
                    key={l.name}
                    ref={(el) => {
                      dropdownRefs.current[l.name] = el;
                    }}
                    className="relative"
                    role="none"
                  >
                    <button
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenDropdown(isOpen ? null : l.name)}
                      onMouseEnter={() => setOpenDropdown(l.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 ${
                        isHighlighted
                          ? "text-primary bg-primary/8"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {l.name}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setOpenDropdown(l.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute top-full left-0 mt-1 transition-all duration-200 origin-top ${
                        isOpen
                          ? "opacity-100 scale-y-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-y-95 pointer-events-none -translate-y-1"
                      }`}
                    >
                      <div className="bg-background border border-border rounded-xl shadow-xl shadow-primary/10 overflow-hidden min-w-[220px] py-1">
                        {l.submenu?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`flex flex-col px-4 py-3 transition-all duration-150 border-l-2 mx-1 rounded-lg my-0.5 ${
                              isActive(item.href)
                                ? "border-primary bg-primary/8 text-primary"
                                : "border-transparent hover:border-primary/40 hover:bg-primary/5 text-foreground/80 hover:text-primary"
                            }`}
                          >
                            <span className="font-semibold text-sm">
                              {item.name}
                            </span>
                            <span className="text-xs text-muted-foreground mt-0.5">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return "href" in l ? (
                <li key={l.name} role="none">
                  <Link
                    to={l.href}
                    role="menuitem"
                    className={`px-3 py-2 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 block ${
                      isActive(l.href)
                        ? "text-primary bg-primary/8"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {l.name}
                  </Link>
                </li>
              ) : null;
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-105 active:scale-95 transition-all duration-200"
            >
              <Phone size={14} />
              Book Appointment
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                    open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  }`}
                >
                  <X size={20} />
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                    open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                  }`}
                >
                  <Menu size={20} />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background border-t border-border/50 px-4 py-3 space-y-1">
            {links.map((l) => {
              if ("submenu" in l) {
                const isMobileOpen = mobileOpenDropdown === l.name;
                const isHighlighted =
                  l.name === "About"
                    ? isAboutActive
                    : l.name === "Allergy Clinic"
                      ? isAllergyActive
                      : false;

                return (
                  <div key={l.name}>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(isMobileOpen ? null : l.name)
                      }
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                        isHighlighted
                          ? "text-primary bg-primary/8"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {l.name}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${isMobileOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isMobileOpen
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-3 mt-1 border-l-2 border-primary/30 pl-3 space-y-1">
                        {l.submenu?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`flex flex-col py-2 px-2 rounded-md text-sm transition-colors ${
                              isActive(item.href)
                                ? "text-primary"
                                : "text-foreground/70 hover:text-primary"
                            }`}
                          >
                            <span className="font-medium">{item.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return "href" in l ? (
                <Link
                  key={l.name}
                  to={l.href}
                  className={`block px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    isActive(l.href)
                      ? "text-primary bg-primary/8"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {l.name}
                </Link>
              ) : null;
            })}

            {/* Mobile CTA */}
            <div className="pt-2 pb-1">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold w-full hover:brightness-105 active:scale-95 transition-all duration-200"
              >
                <Phone size={14} />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;