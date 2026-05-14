import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const BOOKING_URL = "https://via.eviivo.com/SenlacTN34";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Senlac Guest House</h3>
            <p className="text-primary-foreground/75 text-sm leading-relaxed mb-5">
              A cozy, highly-rated guest house in the heart of Hastings. Experience comfort, style, and warm hospitality.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 text-sm font-semibold bg-primary-foreground text-primary rounded hover:opacity-90 transition"
            >
              Book Direct &rarr;
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4 opacity-90">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Our Rooms", to: "/rooms" },
                { label: "Room Rates", to: "/rates" },
                { label: "Special Offers", to: "/offers" },
                { label: "Gallery", to: "/gallery" },
                { label: "Get in Touch", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4 opacity-90">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/75">
                <MapPin size={15} className="mt-0.5 shrink-0 opacity-80" />
                <span>47 Cambridge Gardens,<br />Hastings, TN34 1EN<br />East Sussex, UK</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/75">
                <Phone size={15} className="shrink-0 opacity-80" />
                <a href="tel:01424435767" className="hover:text-primary-foreground transition-colors">01424 435767</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/75">
                <Mail size={15} className="shrink-0 opacity-80" />
                <a href="mailto:info@senlacguesthouse.com" className="hover:text-primary-foreground transition-colors">
                  info@senlacguesthouse.com
                </a>
              </li>
            </ul>
          </div>

          {/* Reception Hours */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4 opacity-90">Reception Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 shrink-0 opacity-80" />
                <div>
                  <p className="font-medium text-primary-foreground/90">Daily</p>
                  <p>8:00 AM – 9:00 PM</p>
                </div>
              </li>
              <li className="text-xs mt-3 italic opacity-60">
                For urgent assistance outside these hours, a night porter number is provided upon check-in.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50">
          <span>&copy; 2026 Senlac Guest House. All rights reserved.</span>
          <span>47 Cambridge Gardens, Hastings, TN34 1EN</span>
        </div>
      </div>
    </footer>
  );
}
