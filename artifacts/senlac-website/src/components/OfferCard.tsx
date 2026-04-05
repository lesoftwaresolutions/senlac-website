import BookingButton from "./BookingButton";

interface OfferCardProps {
  badge: string;
  title: string;
  description: string;
  highlight: string;
}

export default function OfferCard({ badge, title, description, highlight }: OfferCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-8 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
      <div>
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] bg-primary text-primary-foreground px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
        <h3 className="font-serif text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">
        <p className="text-accent font-semibold text-sm mb-4 italic">{highlight}</p>
        <BookingButton label="Book This Offer" variant="primary" size="sm" />
      </div>
    </div>
  );
}
