import BookingButton from "./BookingButton";
import { Wifi, Tv, Coffee, Wind, ShowerHead, Columns2 } from "lucide-react";

interface RoomCardProps {
  type: string;
  maxGuests: number;
  name: string;
  description: string;
  amenities: { label: string }[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

const amenityIconMap: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi size={14} />,
  "TV with Freeview": <Tv size={14} />,
  "Tea/Coffee Tray": <Coffee size={14} />,
  "Hairdryer": <Wind size={14} />,
  "Ensuite Shower": <ShowerHead size={14} />,
  "Ironing Board": <Columns2 size={14} />,
  "Mini Fridge": <Coffee size={14} />,
};

export default function RoomCard({
  type,
  maxGuests,
  name,
  description,
  amenities,
  imageUrl,
  imageAlt,
  reverse = false,
}: RoomCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} bg-card rounded-xl overflow-hidden shadow-sm border border-border`}>
      {/* Image */}
      <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      {/* Content */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              {type}
            </span>
            <span className="text-xs text-muted-foreground">Max {maxGuests} Guest{maxGuests > 1 ? "s" : ""}</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-primary mb-3">{name}</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>

          <div className="mt-5 grid grid-cols-2 gap-2">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-2 text-xs text-foreground/70">
                <span className="text-primary/70">{amenityIconMap[a.label] ?? <Wifi size={14} />}</span>
                {a.label}
              </div>
            ))}
          </div>
        </div>

        <div>
          <BookingButton label="Book This Room" variant="primary" size="md" />
        </div>
      </div>
    </div>
  );
}
