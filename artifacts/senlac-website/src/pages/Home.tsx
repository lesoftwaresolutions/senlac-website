import { Link } from "wouter";
import BookingButton from "@/components/BookingButton";
import OfferCard from "@/components/OfferCard";
import { Wifi, Award, Star, MapPin, Phone, Mail } from "lucide-react";

const BOOKING_URL = "https://via.eviivo.com/SenlacTN34";
const BASE = "https://www.senlacguesthouse.co.uk/resources/gallery/";

const features = [
  { icon: Wifi, label: "Free High-Speed WiFi" },
  { icon: MapPin, label: "Central Hastings Location" },
  { icon: Award, label: "Highly Rated" },
  { icon: Star, label: "Great Value" },
];

const roomPreviews = [
  {
    name: "Double Room (Ensuite)",
    description: "Spacious double room with private ensuite shower and WC. Sleeps 2.",
    img: `${BASE}01.jpg`,
  },
  {
    name: "Family Room (Private Bathroom)",
    description: "Family room sleeping up to 3 guests with private bathroom.",
    img: `${BASE}02.jpg`,
  },
  {
    name: "Single Room (Shared Bathroom)",
    description: "Cozy single room perfect for solo travellers. Shared bathroom.",
    img: `${BASE}27.jpg`,
  },
];

const offers = [
  {
    badge: "Save 10%",
    title: "Mid-Week Special",
    description: "Stay any 3 nights between Sunday and Thursday and receive 10% off your total booking price.",
    highlight: "3 Night Mid-Week Break",
  },
  {
    badge: "Free Upgrade",
    title: "Romantic Getaway",
    description: "Stay Sunday night and get a free room upgrade (subject to availability) plus a complimentary bottle of wine.",
    highlight: "Sunday Night Escape",
  },
  {
    badge: "Winter Deal",
    title: "Winter Warmer",
    description: "Enjoy a cozy 2-night stay during November–February for a special discounted rate. Perfect for a winter escape.",
    highlight: "2 Night Winter Break",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={`${BASE}01.jpg`}
          alt="Senlac Guest House Hastings"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto fade-up">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-4 font-medium">
            Welcome to Hastings
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Senlac Guest House
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed font-light">
            Affordable luxury &amp; stylish comfort in the heart of East Sussex.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary font-semibold rounded hover:bg-primary hover:text-white transition-all duration-200 text-sm"
            >
              Check Availability
            </a>
            <Link
              to="/rooms"
              className="px-8 py-4 border-2 border-white/70 text-white font-semibold rounded hover:bg-white/10 transition-all duration-200 text-sm"
            >
              View Rooms
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="w-px h-10 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* FEATURE BADGES */}
      <section className="bg-primary py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-primary-foreground">
                <Icon size={20} className="opacity-80" />
                <span className="text-xs font-medium tracking-wide opacity-85">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">A Relaxing Coastal Escape</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Your Home Away From Home in Hastings
          </h2>
          <p className="text-foreground/70 text-base leading-relaxed max-w-2xl mx-auto">
            Located just minutes from Hastings town centre and the historic Old Town, Senlac Guest House offers the perfect blend of modern comfort and traditional hospitality. Whether you're here for a romantic weekend, a family holiday, or a business trip, we ensure a memorable stay.
          </p>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="py-16 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Accommodation</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Our Rooms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roomPreviews.map((room) => (
              <div key={room.name} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">{room.name}</h3>
                  <p className="text-foreground/65 text-sm leading-relaxed mb-4">{room.description}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent"
                  >
                    Book Now &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/rooms"
              className="px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERS PREVIEW */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Exclusive Deals</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Special Offers</h2>
            <p className="text-muted-foreground text-base mt-3">Enjoy great savings on your stay in Hastings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-primary-foreground/80 text-base mb-8">
            Book directly through our website for the best rates and exclusive offers. Best price guaranteed.
          </p>
          <BookingButton label="Book Now" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" />
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-14 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin size={20} className="text-primary/70" />
              <p className="text-sm font-medium text-foreground">Location</p>
              <p className="text-muted-foreground text-xs">47 Cambridge Gardens, Hastings, TN34 1EN</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone size={20} className="text-primary/70" />
              <p className="text-sm font-medium text-foreground">Phone</p>
              <a href="tel:01424435767" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                01424 435767
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail size={20} className="text-primary/70" />
              <p className="text-sm font-medium text-foreground">Email</p>
              <a href="mailto:info@senlacguesthouse.com" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                info@senlacguesthouse.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
