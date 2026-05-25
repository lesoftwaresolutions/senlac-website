import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import doubleSharedImg from "@assets/IMG_4365_1778766003809.JPG";
import familySharedGardenImg from "@assets/IMG_4363_1778766981010.JPG";

import ensuitePhoto1 from "@assets/IMG_4780_1779725063061.JPG";
import ensuitePhoto2 from "@assets/IMG_4781_-_Edited_1779725063062.jpg";
import ensuitePhoto3 from "@assets/IMG_4783_-_Edited_1779725063063.jpg";
import ensuitePhoto4 from "@assets/IMG_4785_-_Edited_-_Edited_-_Edited_1779725063063.jpg";
import ensuitePhoto5 from "@assets/IMG_4786_-_Edited_1779725063063.jpg";
import ensuitePhoto6 from "@assets/IMG_4788_-_Edited_1779725063064.jpg";
import ensuitePhoto7 from "@assets/IMG_4791_(1)_-_Edited_1779725063064.jpg";
import ensuitePhoto8 from "@assets/IMG_4792_-_Edited_1779725063064.jpg";
import ensuitePhoto9 from "@assets/IMG_4793_-_Edited_1779725063064.jpg";
import ensuitePhoto10 from "@assets/IMG_4795_-_Edited_1779725063065.jpg";

import familyEnsuiteP1 from "@assets/IMG_4799_1779729356083.JPG";
import familyEnsuiteP2 from "@assets/IMG_4800_1779729356085.JPG";
import familyEnsuiteP3 from "@assets/IMG_4801_1779729356085.JPG";
import familyEnsuiteP4 from "@assets/IMG_4802_1779729356086.JPG";
import familyEnsuiteP5 from "@assets/IMG_4804_-_Edited_1779729356086.jpg";
import familyEnsuiteP6 from "@assets/IMG_4805_1779729356087.JPG";
import familyEnsuiteP7 from "@assets/IMG_4806_1779729356087.JPG";
import familyEnsuiteP8 from "@assets/IMG_4807_-_Edited_1779729356087.jpg";
import familyEnsuiteP9 from "@assets/IMG_4808_-_Edited_1779729356087.jpg";
import familyEnsuiteP10 from "@assets/IMG_4810_-_Edited_1779729356088.jpg";
import familyEnsuiteP11 from "@assets/IMG_4811_1779729356088.JPG";

const ensuitePhotos = [
  ensuitePhoto1, ensuitePhoto2, ensuitePhoto3, ensuitePhoto4, ensuitePhoto5,
  ensuitePhoto6, ensuitePhoto7, ensuitePhoto8, ensuitePhoto9, ensuitePhoto10,
];

const familyEnsuitePhotos = [
  familyEnsuiteP1, familyEnsuiteP2, familyEnsuiteP3, familyEnsuiteP4, familyEnsuiteP5,
  familyEnsuiteP6, familyEnsuiteP7, familyEnsuiteP8, familyEnsuiteP9, familyEnsuiteP10,
  familyEnsuiteP11,
];

const G = (n: string) => `https://www.senlacguesthouse.co.uk/resources/gallery/${n}`;

const ENSUITE_AMENITIES = [
  { label: "Free WiFi" },
  { label: "Smart TV" },
  { label: "Tea/Coffee Tray" },
  { label: "Iron/Ironing Board" },
  { label: "Wardrobe" },
  { label: "Dressing Table" },
  { label: "Mini Fridge/Wine Cooler" },
  { label: "Shower/Toilet Facilities" },
  { label: "Free Toiletries" },
];

const rooms = [
  {
    type: "Double",
    maxGuests: 2,
    name: "Double Room (Ensuite)",
    description:
      "Spacious double room with private ensuite shower and WC. Complimentary wireless Internet access keeps you connected, and the Smart TV is provided for your entertainment. A coffee/tea maker and a mini fridge/wine cooler are supplied. En-suite shower, toilet and complimentary toiletries are included.",
    amenities: ENSUITE_AMENITIES,
    imageUrl: G("01.jpg"),
    imageAlt: "Double Ensuite Room — green striped décor at Senlac Guest House",
  },
  {
    type: "Double",
    maxGuests: 2,
    name: "Double Room (Shared Bathroom)",
    description:
      "Comfortable double room with shared bathroom access. Includes complimentary wireless Internet, Smart TV, tea/coffee making facilities and a mini fridge/wine cooler. Shared bathroom with bathtub and shower combination.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Smart TV" },
      { label: "Tea/Coffee Tray" },
      { label: "Mini Fridge/Wine Cooler" },
      { label: "Hairdryer" },
    ],
    imageUrl: doubleSharedImg,
    imageAlt: "Double Room with Shared Bathroom at Senlac Guest House",
  },
  {
    type: "Single",
    maxGuests: 1,
    name: "Single Room (Shared Bathroom)",
    description:
      "Cozy single room perfect for solo travellers. Complimentary wireless Internet access keeps you connected, and the Smart TV is available for your entertainment. A coffee/tea maker and a mini fridge/wine cooler are supplied. Shared bathroom access.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Smart TV" },
      { label: "Tea/Coffee Tray" },
      { label: "Mini Fridge/Wine Cooler" },
      { label: "Hairdryer" },
    ],
    imageUrl: G("27.jpg"),
    imageAlt: "Single Room with Shared Bathroom at Senlac Guest House",
  },
  {
    type: "Family",
    maxGuests: 3,
    name: "Family Room (Ensuite – Small)",
    description:
      "Comfortable family room sleeping up to 3 guests with private ensuite bathroom. Complimentary wireless Internet access, Smart TV, coffee/tea maker and a mini fridge/wine cooler are all provided. En-suite shower, toilet and complimentary toiletries included.",
    amenities: ENSUITE_AMENITIES,
    imageUrl: G("05.jpg"),
    imageAlt: "Family Room Ensuite Small at Senlac Guest House",
  },
  {
    type: "Family",
    maxGuests: 3,
    name: "Family Room (Private Bathroom – Small)",
    description:
      "Bright family room for up to 3 guests with private bathroom. Complimentary wireless Internet access, Smart TV, coffee/tea maker, mini fridge/wine cooler and complimentary toiletries included. Ideal for a small family or group.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Smart TV" },
      { label: "Tea/Coffee Tray" },
      { label: "Mini Fridge/Wine Cooler" },
      { label: "Hairdryer" },
    ],
    imageUrl: G("02.jpg"),
    imageAlt: "Family Room Private Bathroom Small — rose floral décor at Senlac Guest House",
  },
  {
    type: "Family",
    maxGuests: 3,
    name: "Family Room (Shared Bathroom – Garden View)",
    description:
      "Lovely family room with garden views, sleeping up to 3 guests. Includes complimentary wireless Internet, Smart TV, tea/coffee making facilities and a mini fridge/wine cooler. Shared bathroom access with a relaxing garden outlook.",
    amenities: [
      { label: "Free WiFi" },
      { label: "Smart TV" },
      { label: "Tea/Coffee Tray" },
      { label: "Mini Fridge/Wine Cooler" },
      { label: "Hairdryer" },
    ],
    imageUrl: familySharedGardenImg,
    imageAlt: "Family Room Shared Bathroom Garden View at Senlac Guest House",
  },
];

const roomExtras: Record<number, { roomPhotos: string[]; view360Url: string; roomTourUrl: string }> = {
  0: {
    roomPhotos: ensuitePhotos,
    view360Url: "https://www.youtube.com/shorts/RrhAvRidnFA",
    roomTourUrl: "https://www.youtube.com/shorts/iDIeVF1m0Tk",
  },
  3: {
    roomPhotos: familyEnsuitePhotos,
    view360Url: "https://www.youtube.com/shorts/MN2C-fgLnIo",
    roomTourUrl: "https://www.youtube.com/shorts/E7EQGCVfNi0",
  },
};

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
            <RoomCard
              key={room.name}
              {...room}
              reverse={i % 2 !== 0}
              {...(roomExtras[i] ?? {})}
            />
          ))}
        </div>
      </section>
    </>
  );
}
