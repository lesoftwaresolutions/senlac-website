import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";

const BASE = "https://www.senlacguesthouse.co.uk/resources/gallery/";

const rooms = [
  {
    type: "Single",
    maxGuests: 1,
    name: "Single Room (Shared Bathroom)",
    description:
      "Cozy single room perfect for solo travellers. Features shared bathroom access with basin in room. A comfortable and affordable option for those exploring Hastings on their own.",
    amenities: [
      { label: "Free WiFi" },
      { label: "TV with Freeview" },
      { label: "Tea/Coffee Tray" },
      { label: "Hairdryer" },
    ],
    imageUrl: `${BASE}08.jpg`,
    imageAlt: "Single room at Senlac Guest House",
  },
  {
    type: "Single",
    maxGuests: 1,
    name: "Single Room (Ensuite)",
    description:
      "Private single room with ensuite shower and WC. Perfect for the solo traveller who prefers their own private facilities. Includes all standard amenities.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Ensuite Shower" },
      { label: "TV with Freeview" },
      { label: "Tea/Coffee Tray" },
      { label: "Hairdryer" },
    ],
    imageUrl: `${BASE}30.jpg`,
    imageAlt: "Single ensuite room at Senlac Guest House",
    reverse: true,
  },
  {
    type: "Double",
    maxGuests: 2,
    name: "Double Room (Ensuite)",
    description:
      "Spacious double room with private ensuite shower and WC. Ideal for couples or those wanting extra comfort. Includes an ironing board for longer stays.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Ensuite Shower" },
      { label: "TV with Freeview" },
      { label: "Tea/Coffee Tray" },
      { label: "Ironing Board" },
      { label: "Hairdryer" },
    ],
    imageUrl: `${BASE}28.jpg`,
    imageAlt: "Double ensuite room at Senlac Guest House",
  },
  {
    type: "Twin",
    maxGuests: 2,
    name: "Twin Room (Ensuite)",
    description:
      "Twin room with two single beds and private ensuite. Perfect for friends travelling together or guests who prefer separate beds, with all the comforts of home.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Ensuite Shower" },
      { label: "TV with Freeview" },
      { label: "Tea/Coffee Tray" },
      { label: "Hairdryer" },
    ],
    imageUrl: `${BASE}27.jpg`,
    imageAlt: "Twin ensuite room at Senlac Guest House",
    reverse: true,
  },
  {
    type: "Family",
    maxGuests: 4,
    name: "Family Room (Ensuite)",
    description:
      "Large room for families (2 Adults & up to 2 Children) with private ensuite. Features a double bed and bunk beds, plus a mini fridge for added convenience. Everyone will feel right at home.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Ensuite Shower" },
      { label: "TV with Freeview" },
      { label: "Tea/Coffee Tray" },
      { label: "Mini Fridge" },
      { label: "Hairdryer" },
    ],
    imageUrl: `${BASE}26.jpg`,
    imageAlt: "Family ensuite room at Senlac Guest House",
  },
];

export default function Rooms() {
  return (
    <>
      <PageHero
        title="Our Rooms"
        subtitle="Clean, comfortable, and stylish accommodation to suit every budget. All rooms include free WiFi, TV, and tea/coffee making facilities."
      />
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          {rooms.map((room, i) => (
            <RoomCard key={room.name} {...room} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>
    </>
  );
}
