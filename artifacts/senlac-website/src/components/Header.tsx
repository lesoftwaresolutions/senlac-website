import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const BOOKING_URL = "https://via.eviivo.com/SenlacTN34";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Rates", to: "/rates" },
  { label: "Services", to: "/services" },
  { label: "Breakfast", to: "/breakfast" },
  { label: "Offers", to: "/offers" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none cursor-pointer"
          >
            <span
              className={`font-serif text-lg font-bold tracking-wide transition-colors ${
                transparent ? "text-white" : "text-primary"
              }`}
            >
              Senlac
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.25em] font-sans transition-colors ${
                transparent ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              Guest House
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                  location === link.to
                    ? transparent
                      ? "text-white underline underline-offset-4"
                      : "text-primary underline underline-offset-4"
                    : transparent
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded hover:bg-accent transition-colors"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-2 rounded transition-colors ${
              transparent ? "text-white" : "text-foreground"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 text-sm font-medium border-b border-border/50 transition-colors ${
                  location === link.to
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 text-sm font-semibold bg-primary text-primary-foreground rounded hover:bg-accent transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
