import BookingButton from "@/components/BookingButton";
import { CheckCircle, Clock, Shield, Tag } from "lucide-react";

const BOOKING_URL = "https://via.eviivo.com/SenlacTN34";

const benefits = [
  { icon: Tag, title: "Best Price Guarantee", desc: "Book direct and always get our best available rate. No third-party fees." },
  { icon: Shield, title: "Free Cancellation", desc: "Free cancellation up to 48 hours before your arrival date." },
  { icon: Clock, title: "Flexible Check-in", desc: "We'll do our best to accommodate your check-in time." },
  { icon: CheckCircle, title: "No Hidden Fees", desc: "Your rate includes breakfast. Nothing extra to pay at the door." },
];

export default function BookNow() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-secondary/40 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Direct Booking</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-5">
            Book Your Stay
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Best rates guaranteed when you book direct. Click below to check availability and reserve your room at Senlac Guest House.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 text-base font-bold bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Check Availability & Book &rarr;
          </a>
        </div>
      </section>

      {/* Why book direct */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary">Why Book Direct?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif font-bold text-primary text-sm mb-2">{title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need help section */}
      <section className="py-14 bg-secondary/30 text-center border-t border-border">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-primary mb-3">Need Help?</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Call us or email for personal assistance with your booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01424435767"
              className="px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              01424 435767
            </a>
            <a
              href="mailto:info@senlacguesthouse.com"
              className="px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              info@senlacguesthouse.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
