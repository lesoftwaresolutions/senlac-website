import PageHero from "@/components/PageHero";
import OfferCard from "@/components/OfferCard";
import { Info } from "lucide-react";

const offers = [
  {
    badge: "Save 10%",
    title: "Mid-Week Special",
    description:
      "Stay any 3 nights between Sunday and Thursday and receive 10% off your total booking price.",
    highlight: "3 Night Mid-Week Break — 10% Off",
  },
  {
    badge: "Free Upgrade",
    title: "Romantic Getaway",
    description:
      "Stay Sunday night and get a free room upgrade (subject to availability) plus a complimentary bottle of wine delivered to your room. Perfect for couples.",
    highlight: "Sunday Night Escape — Free Room Upgrade & Wine",
  },
  {
    badge: "Winter Deal",
    title: "Winter Warmer",
    description:
      "Enjoy a cozy 2-night stay during November–February for a special discounted rate of just £99 for two people. The perfect winter escape by the coast.",
    highlight: "2 Night Winter Break — November to February",
  },
];

export default function Offers() {
  return (
    <>
      <PageHero
        title="Special Offers"
        subtitle="Enjoy great savings on your stay in Hastings with our exclusive deals."
      />

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
            {offers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex items-start gap-3 bg-muted/40 border border-border rounded-lg p-5 text-sm text-muted-foreground">
              <Info size={16} className="shrink-0 mt-0.5 text-primary/60" />
              <p>
                Offers cannot be used in conjunction with other promotions. Subject to availability. Please mention the offer when booking via our booking system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
