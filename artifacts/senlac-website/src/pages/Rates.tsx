import PageHero from "@/components/PageHero";
import BookingButton from "@/components/BookingButton";
import { Info } from "lucide-react";

const rateRows = [
  { type: "Single (Shared Bathroom)", facilities: "Basin in room, shared shower/WC" },
  { type: "Single Ensuite", facilities: "Private shower & WC" },
  { type: "Double (Shared Bathroom)", facilities: "Basin in room, shared shower/WC" },
  { type: "Double Ensuite", facilities: "Private shower & WC" },
  { type: "Twin Ensuite", facilities: "Two single beds, private shower & WC" },
  { type: "Family Ensuite (3 guests)", facilities: "Double + Single bed" },
  { type: "Family Ensuite (4 guests)", facilities: "Double + Bunk beds" },
];

export default function Rates() {
  return (
    <>
      <PageHero
        title="Room Rates"
        subtitle="Competitive prices for quality accommodation. Rates are per room, per night, including breakfast."
      />

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">

          {/* Live pricing message */}
          <div className="bg-secondary/60 border border-border rounded-xl p-8 text-center mb-12">
            <p className="font-serif text-2xl font-semibold text-primary mb-3">
              Prices May Vary
            </p>
            <p className="text-foreground/70 text-base leading-relaxed mb-6">
              Room rates vary by season, availability, and length of stay. Please check live availability for current pricing and the best deals.
            </p>
            <BookingButton label="Check Availability" size="lg" variant="primary" />
          </div>

          {/* Room type reference table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="font-serif text-xl font-bold text-primary">Room Types &amp; Facilities</h2>
              <p className="text-sm text-muted-foreground mt-1">Rates include full cooked breakfast for all guests.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left px-6 py-3 font-semibold text-foreground/80">Room Type</th>
                    <th className="text-left px-6 py-3 font-semibold text-foreground/80">Facilities</th>
                  </tr>
                </thead>
                <tbody>
                  {rateRows.map((row, i) => (
                    <tr
                      key={row.type}
                      className={`border-t border-border ${i % 2 === 0 ? "" : "bg-muted/20"}`}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{row.type}</td>
                      <td className="px-6 py-4 text-foreground/65">{row.facilities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 flex items-start gap-3 bg-muted/40 border border-border rounded-lg p-5">
            <Info size={16} className="text-primary/70 mt-0.5 shrink-0" />
            <div className="text-sm text-foreground/70 space-y-1">
              <p>Rates may vary during bank holidays and special events.</p>
              <p>A minimum stay of 2 nights may apply on weekends during high season.</p>
              <p>All bookings include our award-winning full cooked breakfast.</p>
            </div>
          </div>

          {/* Why book direct */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Best Price Guarantee", desc: "Direct bookings always get our best rates." },
              { title: "Free Cancellation", desc: "Cancel up to 48 hours before arrival." },
              { title: "Flexible Check-in", desc: "We accommodate your arrival time where possible." },
              { title: "No Hidden Fees", desc: "The price you see includes breakfast." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-5 text-center">
                <h3 className="font-semibold text-primary text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
