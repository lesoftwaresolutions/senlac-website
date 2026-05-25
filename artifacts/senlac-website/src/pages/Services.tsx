import PageHero from "@/components/PageHero";
import { Wifi, Coffee, MapPin, Clock, Luggage, HelpCircle } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Check-in & Check-out",
    description:
      "Check-in is available from 2:00 PM to 9:00 PM. Check-out is by 10:30 AM on the day of departure. Late check-in can be arranged upon request.",
  },
  {
    icon: MapPin,
    title: "Parking Information",
    description:
      "For parking information in the local area, please click here to check with the local council website for the latest parking details.",
    link: "https://www.hastings.gov.uk/parking/carparks/",
    linkLabel: "Check Parking Information",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description:
      "Stay connected with complimentary high-speed fiber broadband available throughout the guest house, including all bedrooms and public areas.",
  },
  {
    icon: Coffee,
    title: "Award-Winning Breakfast",
    description:
      "Our award-winning breakfast is served daily from 8:00 AM to 9:30 AM in our bright and airy dining room. We cater to all dietary requirements.",
  },
  {
    icon: MapPin,
    title: "Local Guide",
    description:
      "We provide comprehensive local guides, maps, and personal recommendations for restaurants, attractions, and hidden gems in Hastings.",
  },
  {
    icon: Luggage,
    title: "Luggage Storage",
    description:
      "Luggage storage is available for early arrivals or late departures. Store your bags safely while you explore Hastings.",
  },
];

const faqs = [
  {
    q: "Is breakfast included?",
    a: "Yes, a full cooked breakfast is included in all our room rates.",
  },
  {
    q: "Do you accept pets?",
    a: "Sorry, we do not accept pets at Senlac Guest House.",
  },
  {
    q: "Is the guest house accessible?",
    a: "Due to the historic nature of our building, we do not have a lift. There are stairs to all guest rooms.",
  },
  {
    q: "Can I leave my luggage?",
    a: "Yes, luggage storage is available for early arrivals or late departures.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Guest Services"
        subtitle="Everything you need for a comfortable and relaxing stay in the heart of Hastings."
      />

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map(({ icon: Icon, title, description, link, linkLabel }: { icon: React.ElementType; title: string; description: string; link?: string; linkLabel?: string }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-7 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">{title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{description}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs font-semibold text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    {linkLabel ?? "Click here"}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Common Questions</p>
              <h2 className="font-serif text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={18} className="text-primary/60 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">{q}</h4>
                      <p className="text-foreground/65 text-sm leading-relaxed">{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
